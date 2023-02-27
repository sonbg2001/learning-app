const photoListenQuestion = [
  {
    id: 1,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/161252_03012012_593148.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/161252_03012012_487597.mp3",
    answers: [
      {
        content: "A",
        subContent: "A waiter is taking orders from the customers",
        translate: "Một người phục vụ đang nhận đơn đặt hàng từ khách hàng",
        isResult: true,
      },
      {
        content: "B",
        subContent: "The people are waiting to enter the café",
        translate: "Mọi người đang chờ đợi để vào quán cà phê",
      },
      {
        content: "C",
        subContent: "Meals are being served to the patrons outside",
        translate:
          "Các bữa ăn đang được phục vụ cho những khách hàng quen bên ngoài",
      },
      {
        content: "D",
        subContent: "The people are sitting outdoors at a café",
        translate: "Mọi người đang ngồi ngoài trời tại một quán cà phê",
      },
    ],
    source: "https://www.anhngumshoa.com/test/practice-test-1-14260.html",
  },
  {
    id: 2,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/161148_03012012_418026.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/161148_03012012_861791.mp3",
    answers: [
      {
        content: "A",
        subContent: "The woman is browsing in a bookstore",
        translate: "Người phụ nữ đang duyệt trong một hiệu sách",
        isResult: true,
      },
      {
        content: "B",
        subContent: "The woman is booking a table",
        translate: "Người phụ nữ đang đặt bàn",
      },
      {
        content: "C",
        subContent: "The woman is opening her backpack",
        translate: "người phụ nữ đang mở ba lô của mình",
      },
      {
        content: "D",
        subContent: "The woman is reading at her desk",
        translate: "Người phụ nữ đang đọc sách tại bàn của cô ấy",
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=2",
  },
  {
    id: 3,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/161600_03012012_161166.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/161041_03012012_445849.mp3",
    answers: [
      {
        content: "A",
        subContent: "The building are being demolished",
        translate: "Tòa nhà đang bị phá hủy",
        isResult: false,
      },
      {
        content: "B",
        subContent: "There are trees surrounding the buildings",
        translate: "Có cây cối xung quanh các tòa nhà",
        isResult: false,
      },
      {
        content: "C",
        subContent: "A boat is passing under a bridge",
        translate: "Một chiếc thuyền đang đi qua dưới một cây cầu",
        isResult: false,
      },
      {
        content: "D",
        subContent: "There are many buildings near the lake",
        translate: "Có nhiều tòa nhà gần hồ",
        isResult: true,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=2",
  },
  {
    id: 4,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/160931_03012012_122439.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160931_03012012_958416.mp3",
    answers: [
      {
        content: "A",
        subContent: "The street is closed to traffic",
        translate: "Đường phố cấm xe cộ qua lại",
        isResult: false,
      },
      {
        content: "B",
        subContent: "Some people are getting on a bus",
        translate: "Một số người đang lên xe buýt",
        isResult: false,
      },
      {
        content: "C",
        subContent: "People are waiting to cross the street",
        translate: "Mọi người đang chờ để băng qua đường",
        isResult: true,
      },
      {
        content: "D",
        subContent: "Lines are being painted on the road",
        translate: "Các vạch kẻ đang được vẽ trên đường",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=4",
  },
  {
    id: 5,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/160824_03012012_152844.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160824_03012012_292837.mp3",
    answers: [
      {
        content: "A",
        subContent: "Most of the shelves are empty",
        translate: "Hầu hết các kệ đều trống",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The shelves are filled with books",
        translate: "Các kệ chứa đầy sách",
        isResult: true,
      },
      {
        content: "C",
        subContent: "Some books have been piled on the floor",
        translate: "Một số cuốn sách đã được chất đống trên sàn nhà",
        isResult: false,
      },
      {
        content: "D",
        subContent: "A librarian is putting away books",
        translate: "Một thủ thư đang cất sách",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=5",
  },
  {
    id: 6,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/161617_03012012_362243.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160155_03012012_823669.mp3",
    answers: [
      {
        content: "A",
        subContent: "He is riding his bicycle",
        translate: "Anh ấy đang đi xe đạp",
        isResult: true,
      },
      {
        content: "B",
        subContent: "He is putting on a helmet",
        translate: "Anh ấy đang đội mũ bảo hiểm",
        isResult: false,
      },
      {
        content: "C",
        subContent: "He is fixing his bicycle",
        translate: "Anh ấy đang sửa xe đạp của mình",
        isResult: false,
      },
      {
        content: "D",
        subContent: "He is stopped in traffic",
        translate: "Anh ấy đang dừng xe",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=6",
  },
  {
    id: 7,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/160435_03012012_433764.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160435_03012012_931912.mp3",
    answers: [
      {
        content: "A",
        subContent: "He is calling from a public phone",
        translate: "Anh ấy đang gọi từ điện thoại công cộng",
        isResult: true,
      },
      {
        content: "B",
        subContent: "He is looking at a telephone directory",
        translate: "Anh ấy đang xem danh bạ điện thoại",
        isResult: false,
      },
      {
        content: "C",
        subContent: "He is standing in the hallway",
        translate: "Anh ấy đang đứng ở hành lang",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The telephone is being repaired",
        translate: "Điện thoại đang được sửa chữa",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=7",
  },
  {
    id: 8,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/160314_03012012_189044.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160314_03012012_779257.mp3",
    answers: [
      {
        content: "A",
        subContent: "The women are talking to each other",
        translate: "Những người phụ nữ đang nói chuyện với nhau",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The women are checking the map",
        translate: "Những người phụ nữ đang kiểm tra bản đồ",
        isResult: true,
      },
      {
        content: "C",
        subContent: "The women are shopping in the supermarket",
        translate: "Những người phụ nữ đang mua sắm trong siêu thị",
        isResult: false,
      },
      {
        content: "D",
        subContent: "One of the women is mopping the floor",
        translate: "Một trong những người phụ nữ đang lau sàn nhà",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=8",
  },
  {
    id: 9,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/135250_04012012_514898.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160547_03012012_360705.mp3",
    answers: [
      {
        content: "A",
        subContent: "The bags are being stacked on the shelves",
        translate: "Những chiếc túi đang được xếp chồng lên nhau trên kệ",
        isResult: false,
      },
      {
        content: "B",
        subContent: "A customer is paying for a purchase",
        translate: "Một khách hàng đang trả tiền mua hàng",
        isResult: false,
      },
      {
        content: "C",
        subContent: "Many bags are displayed for sale",
        translate: "Nhiều túi được bày bán",
        isResult: true,
      },
      {
        content: "D",
        subContent: "The store is closed for business",
        translate: "Cửa hàng đóng cửa để kinh doanh",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=9",
  },
  {
    id: 10,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/160707_03012012_344500.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/160707_03012012_680270.mp3",
    answers: [
      {
        content: "A",
        subContent: "The man is feeding a horse",
        translate: "Người đàn ông đang cho ngựa ăn",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The man is building a fence",
        translate: "người đàn ông đang xây dựng một hàng rào",
        isResult: false,
      },
      {
        content: "C",
        subContent: "The men is riding a horse",
        translate: "Những người đàn ông đang cưỡi ngựa",
        isResult: true,
      },
      {
        content: "D",
        subContent: "The man is taking off his cowboy hat",
        translate: "Người đàn ông đang cởi chiếc mũ cao bồi của mình",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-1-14260.html?page=10",
  },
  {
    id: 11,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/110640_04012012_956356.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/110640_04012012_814770.mp3",
    answers: [
      {
        content: "A",
        subContent: "The patient is being treated by the dentist",
        translate: "Bệnh nhân đang được nha sĩ điều trị",
        isResult: true,
      },
      {
        content: "B",
        subContent: "The dentist is teasing the patient",
        translate: "Các nha sĩ đang trêu chọc bệnh nhân",
        isResult: false,
      },
      {
        content: "C",
        subContent: "The patient is teething",
        translate: "Bệnh nhân đang mọc răng",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The dentist is taking a break",
        translate: "Nha sĩ đang nghỉ giải lao",
        isResult: false,
      },
    ],
    source: "https://www.anhngumshoa.com/test/practice-test-2-14261.html",
  },
  {
    id: 12,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/110530_04012012_440576.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/110530_04012012_886868.mp3",
    answers: [
      {
        content: "A",
        subContent: "There is a man standing on the counter",
        translate: "Có một người đàn ông đứng trên quầy",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The counter is bare",
        translate: "Quầy trống",
        isResult: false,
      },
      {
        content: "C",
        subContent: "There are several glasses on the counter",
        translate: "Có một vài chiếc ly trên quầy",
        isResult: true,
      },
      {
        content: "D",
        subContent: "There is a picture frame hanging above the counter",
        translate: "Có một khung ảnh treo phía trên quầy",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=2",
  },
  {
    id: 13,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/110431_04012012_320468.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/110431_04012012_577905.mp3",
    answers: [
      {
        content: "A",
        subContent: "The women are walking together",
        translate: "Những người phụ nữ đang đi bộ cùng nhau",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The women are working on a project together",
        translate: "Những người phụ nữ đang làm việc trên một dự án cùng nhau",
        isResult: true,
      },
      {
        content: "C",
        subContent: "The women are arguing about a computer",
        translate: "những người phụ nữ đang tranh luận về một máy tính",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The man is using the computer",
        translate: "Người đàn ông đang sử dụng máy tính",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=3",
  },
  {
    id: 14,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/110313_04012012_517755.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/110313_04012012_608749.mp3",
    answers: [
      {
        content: "A",
        subContent: "The man has hurt his shoulder",
        translate: "Người đàn ông bị thương ở vai",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The package is broken",
        translate: "Gói hàng bọ hỏng",
        isResult: false,
      },
      {
        content: "C",
        subContent: "The woman is angry with the man",
        translate: "Người phụ nữ tức giận với người đàn ông",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The package is being delivered to the woman",
        translate: "Gói hàng đang được chuyển đến người phụ nữ",
        isResult: true,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=4",
  },
  {
    id: 15,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/110142_04012012_431842.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/110142_04012012_131723.mp3",
    answers: [
      {
        content: "A",
        subContent: "The people are in a hotel lobby",
        translate: "Mọi người đang ở trong sảnh khách sạn",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The people are at an airport",
        translate: "Mọi người đang ở sân bay",
        isResult: true,
      },
      {
        content: "C",
        subContent: "The people are in an airplane",
        translate: "Mọi người đang ở trong một chiếc máy bay",
        isResult: false,
      },
      {
        content: "D",
        subContent: "He is packing his suitcase",
        translate: "Anh ấy đang đóng gói hành lý của mình",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=5",
  },
  {
    id: 16,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/110045_04012012_573043.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/110045_04012012_939904.mp3",
    answers: [
      {
        content: "A",
        subContent: "The files are arranged neatly on the shelves",
        translate: "Các tập tài liệu được sắp xếp ngay ngắn trên giá",
        isResult: true,
      },
      {
        content: "B",
        subContent: "The files are disorganized and messy",
        translate: "Các tập tin vô tổ chức và lộn xộn",
        isResult: false,
      },
      {
        content: "C",
        subContent: "The files are empty",
        translate: "Các tập tin trống",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The files are piled up on the desk",
        translate: "Các tập tin được chất đống trên bàn làm việc",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=6",
  },
  {
    id: 17,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/105934_04012012_341342.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/105934_04012012_265673.mp3",
    answers: [
      {
        content: "A",
        subContent: "The man is raising his hand",
        translate: "Người đàn ông đang giơ tay",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The man is lifting a box",
        translate: "Người đàn ông đang nâng một cái hộp",
        isResult: true,
      },
      {
        content: "C",
        subContent: "The boxes are empty",
        translate: "Các hộp trống",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The man is ascending the stairs",
        translate: "Người đàn ông đang đi lên cầu thang",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=7",
  },
  {
    id: 18,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/105816_04012012_888900.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/105816_04012012_999560.mp3",
    answers: [
      {
        content: "A",
        subContent: "The man is standing behind his desk",
        translate: "Người đàn ông đang đứng sau bàn làm việc của mình",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The man is seated in the audience",
        translate: "Người đàn ông đang ngồi trong khán giả",
        isResult: false,
      },
      {
        content: "C",
        subContent: "The man is sitting under the table",
        translate: "Người đàn ông đang ngồi dưới gầm bàn",
        isResult: false,
      },
      {
        content: "D",
        subContent: "The man is sitting at a desk",
        translate: "Người đàn ông đang ngồi ở bàn làm việc",
        isResult: true,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=8",
  },
  {
    id: 19,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/105711_04012012_587902.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/105711_04012012_464224.mp3",
    answers: [
      {
        content: "A",
        subContent: "The road is deserted",
        translate: "Con đường vắng vẻ",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The road is in the desert",
        translate: "Con đường nằm trong sa mạc",
        isResult: false,
      },
      {
        content: "C",
        subContent: "It’s rush hour",
        translate: "Đó là giờ cao điểm",
        isResult: true,
      },
      {
        content: "D",
        subContent: "The man is hitchhiking",
        translate: "Người đàn ông đi nhờ xe",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=9",
  },
  {
    id: 20,
    img: "https://www.anhngumshoa.com/uploads/images/resize/550x550/2012/question/105554_04012012_763848.jpg",
    audio:
      "https://www.anhngumshoa.com/uploads/sound/2012/105554_04012012_432968.mp3",
    answers: [
      {
        content: "A",
        subContent: "The firefighters are rescuing a woman",
        translate: "Lính cứu hỏa đang giải cứu một phụ nữ",
        isResult: false,
      },
      {
        content: "B",
        subContent: "The firefighters are riding in a truck",
        translate: "Các nhân viên cứu hỏa đang đi trong một chiếc xe tải",
        isResult: false,
      },
      {
        content: "C",
        subContent: "The firefighters are holding a hose",
        translate: "Các nhân viên cứu hỏa đang giữ một vòi",
        isResult: true,
      },
      {
        content: "D",
        subContent: "The firefighters are holding a child",
        translate: "Lính cứu hỏa đang bế một đứa trẻ",
        isResult: false,
      },
    ],
    source:
      "https://www.anhngumshoa.com/test/practice-test-2-14261.html?page=10",
  },
  {
    id: 21,
    img: "",
    audio: "",
    answers: [
      {
        content: "A",
        subContent: "Xong test 2",
        translate: "",
        isResult: false,
      },
      {
        content: "B",
        subContent: "",
        translate: "",
        isResult: false,
      },
      {
        content: "C",
        subContent: "",
        translate: "",
        isResult: false,
      },
      {
        content: "D",
        subContent: "",
        translate: "",
        isResult: false,
      },
    ],
    source: "",
  },
  {
    id: 0,
    img: "",
    audio: "",
    answers: [
      {
        content: "A",
        subContent: "",
        translate: "",
        isResult: false,
      },
      {
        content: "B",
        subContent: "",
        translate: "",
        isResult: false,
      },
      {
        content: "C",
        subContent: "",
        translate: "",
        isResult: false,
      },
      {
        content: "D",
        subContent: "",
        translate: "",
        isResult: false,
      },
    ],
    source: "",
  },
];
const data = {
  photoListenQuestion,
};
export { photoListenQuestion };
export default data;
