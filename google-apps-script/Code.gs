/**
 * Romio Lab 3D — Central de Produção
 * Backend do Google Apps Script: serve o painel (Painel.html) e guarda os
 * dados numa aba "KeyValueStore" da planilha vinculada a este projeto.
 *
 * Como usar: veja o passo a passo em google-apps-script/COMO-IMPLANTAR.md
 */

const SHEET_NAME = 'KeyValueStore';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Painel')
    .setTitle('Romio Lab 3D — Central de Produção')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['key', 'value']);
  }
  return sheet;
}

function findRow_(sheet, key) {
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (values[i][0] === key) return i + 1;
  }
  return null;
}

/** Chamada pelo painel via google.script.run.getData(key). */
function getData(key) {
  const sheet = getSheet_();
  const row = findRow_(sheet, key);
  if (!row) return null;
  const value = sheet.getRange(row, 2).getValue();
  return value === '' ? null : String(value);
}

/** Chamada pelo painel via google.script.run.setData(key, value). */
function setData(key, value) {
  const sheet = getSheet_();
  const row = findRow_(sheet, key);
  if (row) {
    sheet.getRange(row, 2).setValue(value);
  } else {
    sheet.appendRow([key, value]);
  }
  return true;
}
