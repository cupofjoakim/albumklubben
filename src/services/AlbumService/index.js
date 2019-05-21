// Please don't use this :(
const PUBLIC_KEY = '2729fff6586466b0db95b377fc7597c3';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

const buildParams = (method, album, artist, autoCorrect = 1) => {
  let str = '';
  if (method) str = `${str}?method=${method}`;
  if (album) str = `${str}&album=${album}`;
  if (artist) str = `${str}&artist=${artist}`;
  if (autoCorrect) str = `${str}&autocorrect=${autoCorrect}`;
  return `${str}&api_key=${PUBLIC_KEY}&format=json`;
};

const findYearInTags = tags => {
  const matchingTags = tags.filter(
    tag => /^\d+$/.test(tag.name) && tag.name.length === 4,
  );
  if (matchingTags.length === 0) return null;
  return matchingTags[0].name;
};

const convertToAlbum = ({ name, artist, url, image, tracks, tags }) => ({
  name,
  artist,
  urls: [{ type: 'lastfm', url }],
  tracks,
  tags: tags.tag,
  year: findYearInTags(tags.tag),
  image: image.length > 0 ? image[image.length - 1]['#text'] : null,
});

const getStorageKey = (album = '', artist = '') =>
  encodeURI(`${album.toLowerCase()}-${artist.toLowerCase()}`);

const cacheAlbum = (data, album, artist) => {
  sessionStorage.setItem(getStorageKey(album, artist), JSON.stringify(data));
};

const getCachedAlbum = (album, artist) => {
  const albumData = sessionStorage.getItem(getStorageKey(album, artist));
  return albumData ? JSON.parse(albumData) : null;
};

class AlbumService {
  static async getAlbumByNameAndArtist(album, artist) {
    if (!album || !artist)
      throw new Error('Both album and artist needs to be passed');

    const cachedAlbumData = getCachedAlbum(album, artist);
    if (cachedAlbumData) return cachedAlbumData;

    const body = buildParams('album.getInfo', album, artist);
    return fetch(BASE_URL + body).then(async res => {
      if (!res.ok) throw new Error('Unable to get album data!');
      const response = await res.json();
      const convertedAlbum = convertToAlbum(response.album);
      cacheAlbum(convertedAlbum, album, artist);
      return convertedAlbum;
    });
  }
}

export default AlbumService;
