import XLSX from "xlsx";

export class SpreadSheet {
  constructor(path) {
    this.path = path ? path : "src/public/memberData.xlsx";
  }

  prepareExport(data) {
    const sheet = XLSX.utils.json_to_sheet(data);
    const exportData = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(exportData, sheet, "listData.xlsx");

    return {
      exportData,
    };
  }

  exportDataBuffer(data) {
    const { exportData } = this.prepareExport(data);
    return XLSX.write(exportData, { bookType: "xlsx", type: "buffer" });
  }
  exportDataFile(data) {
    const { exportData } = this.prepareExport(data);
    XLSX.writeFile(exportData, this.path);
  }
  readFile(filename) {
    const finalObject = {};
    const data = XLSX.readFile(filename, { type: "buffer" });
    data.SheetNames.forEach((sheetName) => {
      let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
      finalObject[sheetName] = rowObject;
    });
    return finalObject;
  }
  readBuffer(buffer) {
    const finalObject = {};
    const data = XLSX.read(buffer, { type: "buffer" });
    data.SheetNames.forEach((sheetName) => {
      let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
      finalObject[sheetName] = rowObject;
    });
    return finalObject;
  }
}
