export function parseTravelRecommendations(response) {
    const entries = response.split('\n').filter(line => line.trim() !== '');

    return entries.map(entry => {
        // 번호와 공백 제거
        const cleanedEntry = entry.replace(/^\d+\.\s*/, '').trim();

        // ' - ' 구분자로 지역명과 나머지 분리
        const [region, districtAndFeatures] = cleanedEntry.split(' - ');

        if (!districtAndFeatures) {
            // ' - '가 없거나 형식이 잘못된 경우 예외 처리
            return {
                region: region.trim(),
                district: '',
                features: []
            };
        }

        // ' : ' 구분자로 지역구와 특징 분리
        const [district, featuresString] = districtAndFeatures.split(': ');

        if (!featuresString) {
            // ' : '가 없거나 형식이 잘못된 경우 예외 처리
            return {
                region: region.trim(),
                district: district.trim(),
                features: []
            };
        }

        // 특징들을 리스트로 변환
        const features = featuresString.split(',').map(feature => feature.trim());

        return {
            region: region.trim(),
            district: district.trim(),
            features
        };
    });
}
