const SPREADSHEET_URL =
  // eslint-disable-next-line max-len
  'https://spreadsheets.google.com/feeds/list/1_7q9jusMZAvBBdk4cHoSg-LhjswU76k0XvGv1EC66u0/od6/public/values?alt=json';

const getSpreadSheet = () =>
  fetch(SPREADSHEET_URL).then(async res => {
    if (!res.ok) throw new Error('Unable to get google spreadsheet!');
    const response = await res.json();
    return response;
  });

const getCell = (spreadSheetRow, cellKey) =>
  spreadSheetRow[`gsx$${cellKey}`].$t;

const convertSpreadSheetToWeekInfo = spreadSheet => {
  const weekEntries = spreadSheet.feed.entry.filter(entry => entry.gsx$week.$t);
  return weekEntries.map(entry => ({
    week: +getCell(entry, 'week'),
    album: getCell(entry, 'album'),
    artist: getCell(entry, 'artist'),
    spotifyUrl: getCell(entry, 'spotify'),
  }));
};

class GoogleDriveService {
  static async getWeekRows() {
    const spreadSheet = await getSpreadSheet();
    return convertSpreadSheetToWeekInfo(spreadSheet);
  }
}

export default GoogleDriveService;
