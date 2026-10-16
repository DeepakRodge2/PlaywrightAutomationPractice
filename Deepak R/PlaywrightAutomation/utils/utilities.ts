//install package to read excel file
//command to run->npm install elsx
import * as XLSX from 'xlsx';

export class Utilities {
  readExcelFile(filePath: string) {
    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[0];
    const sheetValue = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheetValue);

    return data;
  }
}