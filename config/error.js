export function handleError(error) {
    // 기본 에러 메시지
    let message = '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';

    // 에러 유형에 따라 메시지 설정
    if (error.response) {
        // 요청이 이루어졌고 서버가 상태 코드로 응답했으나
        // 요청이 실패한 경우
        message = `에러: ${error.response.data.message || message}`;
    } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없는 경우
        message = '서버로부터 응답이 없습니다. 네트워크를 확인하세요.';
    } else {
        // 설정된 에러가 아닌 경우
        message = `문제 발생: ${error.message}`;
    }

    return { message, status: error.response ? error.response.status : 500 };
}
