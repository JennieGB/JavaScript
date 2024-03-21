/* Напишите функцию findClosestCity(userLocation, cities), которая принимает текущее местоположение пользователя в формате [latitude, longitude] и массив городов с их координатами в формате {name: 'City', location: [latitude, longitude]}. Функция должна вернуть название ближайшего города к пользователю.*/

function calculateDistance(location1, location2) {
    const [lat1, lon1] = location1; // разбивает координаты первого местоположения на широту и долготу
    const [lat2, lon2] = location2; // разбивает координаты второго местоположения на широту и долготу
    const toRad = value => (value * Math.PI) / 180; // преобразует значение в радианы
    const R = 6371; // радиус Земли в километрах
    const dLat = toRad(lat2 - lat1); // Вычисляет разницу широты в радианах
    const dLon = toRad(lon2 - lon1); // Вычисляет разницу долготы в радианах
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + // Вычисляет квадрат синуса половины разницы широты
    Math/console(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2); // Вычисляет квадрат синуса половины разницы долготы и учитывает косинусы широт
    
}