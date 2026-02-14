// ============================================
// Google Apps Script - 웨딩 사진 업로드 서버
// ============================================
//
// [설정 방법]
// 1. https://script.google.com 접속
// 2. "새 프로젝트" 클릭
// 3. 아래 코드를 전부 복사해서 붙여넣기
// 4. FOLDER_ID를 본인의 Google Drive 폴더 ID로 변경
//    (폴더 URL: https://drive.google.com/drive/folders/여기가_FOLDER_ID)
// 5. "배포" → "새 배포" 클릭
// 6. 유형: "웹 앱" 선택
// 7. 실행 주체: "나" / 액세스 권한: "모든 사용자"
// 8. "배포" 클릭 → 권한 승인
// 9. 배포된 URL을 복사해서 청첩장 코드에 붙여넣기
// ============================================

const FOLDER_ID = '1IsafCeMQMiyYw1YoouZel09xXXLG2G5Q';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const folder = DriveApp.getFolderById(FOLDER_ID);

    const fileData = Utilities.base64Decode(data.file);
    const blob = Utilities.newBlob(fileData, data.mimeType, data.fileName);

    const file = folder.createFile(blob);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, fileId: file.getId() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: '웨딩 사진 업로드 서버가 작동 중입니다.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
