const SPREADSHEET_URL =
  "https://spreadsheets.google.com/feeds/list/1_7q9jusMZAvBBdk4cHoSg-LhjswU76k0XvGv1EC66u0/od6/public/values?alt=json";

const getSpreadSheet = () =>
  fetch(SPREADSHEET_URL).then(async res => {
    if (!res.ok) throw new Error("Unable to get google spreadsheet!");
    const response = await res.json();
    return response;
  });

const convertSpreadSheetToWeekInfo = spreadSheet => {
  const weekEntries = spreadSheet.feed.entry.filter(entry => entry.gsx$week.$t);
  return weekEntries.map(entry => ({
    week: Number.parseInt(entry.gsx$week.$t),
    album: entry.gsx$album.$t,
    artist: entry.gsx$artist.$t,
    spotifyUrl: entry.gsx$spotify.$t
  }));
};

const getWeekRows = async () => {
  const spreadSheet = await getSpreadSheet();
  return convertSpreadSheetToWeekInfo(spreadSheet);
};

export { getWeekRows };
