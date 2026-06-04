/*
 * ============================================
 * DATA-DAILY.JS — Tiếng Anh Đời Thường
 * ============================================
 * HƯỚNG DẪN THÊM BÀI HỌC MỚI:
 * 1. Copy một object bài học bất kỳ trong mảng lessons
 * 2. Paste vào cuối mảng lessons của giai đoạn phù hợp
 * 3. Thay đổi id, title, nội dung
 * 4. Website sẽ tự động render bài học mới!
 * ============================================
 */

const DAILY_ENGLISH = {
  title: 'Tiếng Anh Giao Tiếp Đời Thường',
  icon: '🌍',
  color: 'daily',
  phases: [
    {
      id: 'daily-p1',
      name: 'Giai đoạn 1: Khởi Đầu',
      duration: 'Tháng 1–3',
      icon: '🌱',
        lessons: [
        {
          id: 'd1', icon: '👋',
          title: 'Chào Hỏi, Tiếp Đón & Xã Giao',
          titleEn: 'Greetings, Admission & Social Manners',
          description: 'Chào hỏi lịch sự, tiếp đón bệnh nhân tại quầy lễ tân, tiếp nhận thông tin và hướng dẫn chỉ dẫn y tế cơ bản.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Chào hỏi chuyên nghiệp theo thời gian và bối cảnh y tế','Làm chủ quy trình tiếp đón bệnh nhân (hỏi giấy tờ, điền tờ khai)','Sử dụng thành thạo các câu chỉ dẫn lịch sự (mời ngồi, mời đợi, ký tên)'],
          vocabulary: [
            {en: 'Good morning / afternoon / evening', vi: 'Chào buổi sáng / chiều / tối', phonetic: '/ɡʊd ˈmɔː.nɪŋ/ /ˌɑːf.tɚˈnuːn/ /ˈiːv.nɪŋ/'},
            {en: 'Welcome', vi: 'Chào mừng / Tiếp đón', phonetic: '/ˈwel.kəm/'},
            {en: 'Registration form', vi: 'Tờ khai đăng ký', phonetic: '/ˌredʒ.ɪˈstreɪ.ʃən fɔːm/'},
            {en: 'Health insurance card', vi: 'Thẻ bảo hiểm y tế', phonetic: '/helθ ɪnˈʃɔː.rəns kɑːd/'},
            {en: 'Passport / ID card', vi: 'Hộ chiếu / Căn cước công dân', phonetic: '/ˈpɑːs.pɔːt/ /ˌaɪˈdiː kɑːd/'},
            {en: 'Signature / Sign', vi: 'Chữ ký / Ký tên', phonetic: '/ˈsɪɡ.nə.tʃər/ /saɪn/'},
            {en: 'Please / Thank you / Excuse me', vi: 'Làm ơn / Cảm ơn / Xin lỗi (lịch sự)', phonetic: ''},
            {en: 'Wait / Sit down', vi: 'Chờ đợi / Ngồi xuống', phonetic: '/weɪt/ /sɪt daʊn/'}
          ],
          phrases: [
            {en: 'Good morning. Welcome to our clinic.', vi: 'Chào buổi sáng. Chào mừng đến với phòng khám của chúng tôi.'},
            {en: 'How can I help you today?', vi: 'Tôi có thể giúp gì cho anh/chị hôm nay?'},
            {en: 'Could you please fill out this registration form?', vi: 'Anh/chị vui lòng điền vào tờ khai đăng ký này nhé?'},
            {en: 'I need your passport and health insurance card, please.', vi: 'Tôi cần hộ chiếu và thẻ bảo hiểm y tế của anh/chị.'},
            {en: 'Please sit here and wait for a moment.', vi: 'Vui lòng ngồi đây và đợi một lát.'},
            {en: 'The doctor will see you shortly.', vi: 'Bác sĩ sẽ khám cho anh/chị ngay.'},
            {en: 'Please sign your name here.', vi: 'Vui lòng ký tên của bạn ở đây.'}
          ],
          practice: ['Đóng vai y tá tại quầy lễ tân tiếp đón bệnh nhân nước ngoài','Luyện phát âm chuẩn các thuật ngữ hành chính y khoa','Ghi âm và kiểm tra ngữ điệu lịch sự khi chỉ dẫn bệnh nhân'],
          tip: 'Luôn nở nụ cười và duy trì giao tiếp bằng mắt (eye contact) khi tiếp đón bệnh nhân mới để tạo cảm giác thân thiện và an tâm.'
        },
        {
          id: 'd2', icon: '🙋',
          title: 'Tự Giới Thiệu & Trấn An Bệnh Nhân',
          titleEn: 'Self Introduction & Nursing Role',
          description: 'Giới thiệu tên, khoa phòng, kinh nghiệm, cam kết chăm sóc bệnh nhân và hướng dẫn sử dụng nút gọi y tá — nối tiếp tự nhiên sau quy trình tiếp đón ở Bài 1.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Tự giới thiệu chuyên nghiệp trong 30 giây trước bệnh nhân mới nhập viện','Gọi tên chính xác khoa phòng (Pediatrics, ICU, ER) và số năm kinh nghiệm','Sử dụng thành thạo các câu trấn an bệnh nhân (cam kết chăm sóc, hướng dẫn nút gọi)','Phản xạ giao tiếp xã giao với bác sĩ và đồng nghiệp nước ngoài'],
          vocabulary: [
            {en: 'Nurse', vi: 'Y tá / Điều dưỡng', phonetic: '/nɜːrs/'},
            {en: 'Department / Ward', vi: 'Khoa / Buồng bệnh', phonetic: '/dɪˈpɑːt.mənt/ /wɔːd/'},
            {en: 'Pediatrics department', vi: 'Khoa Nhi', phonetic: '/ˌpiː.diˈæt.rɪks/'},
            {en: 'Emergency Room (ER)', vi: 'Phòng cấp cứu', phonetic: '/ɪˈmɜː.dʒən.si ruːm/'},
            {en: 'Intensive Care Unit (ICU)', vi: 'Khoa hồi sức tích cực', phonetic: '/ɪnˈten.sɪv keər ˈjuː.nɪt/'},
            {en: 'Experience', vi: 'Kinh nghiệm', phonetic: '/ɪkˈspɪə.ri.əns/'},
            {en: 'Shift', vi: 'Ca trực', phonetic: '/ʃɪft/'},
            {en: 'Call button', vi: 'Nút gọi y tá', phonetic: '/kɔːl ˈbʌt.ən/'}
          ],
          phrases: [
            {en: 'Hello, Mr. Smith. I am Hoa, your nurse today.', vi: 'Xin chào ông Smith. Tôi là Hoa, y tá của ông hôm nay.'},
            {en: 'I work in this Internal Medicine ward.', vi: 'Tôi làm việc tại khoa Nội tổng hợp này.'},
            {en: 'I have five years of experience in nursing.', vi: 'Tôi có năm năm kinh nghiệm trong ngành điều dưỡng.'},
            {en: 'I am here to take care of you during this shift.', vi: 'Tôi ở đây để chăm sóc anh/chị trong ca trực này.'},
            {en: 'If you need any help, just press this call button.', vi: 'Nếu bác cần giúp đỡ, cứ nhấn chiếc nút gọi này nhé.'},
            {en: 'Please don\'t worry. You are in good hands.', vi: 'Xin đừng lo lắng. Bác đang được chăm sóc tốt.'},
            {en: 'I will come back to check on you in thirty minutes.', vi: 'Tôi sẽ quay lại kiểm tra cho bác sau ba mươi phút.'}
          ],
          practice: ['Đóng vai y tá gõ cửa phòng bệnh và giới thiệu bản thân đầy đủ với bệnh nhân mới','Luyện nói phản xạ trước gương bài giới thiệu 30 giây (Elevator Pitch)','Ghi âm Zalo phản hồi bệnh nhân hỏi: "Hello nurse. Who are you?"'],
          tip: 'Luôn nói TÊN BỆNH NHÂN trước khi giới thiệu mình (ví dụ: "Hello, Mr. Smith. I am Hoa...") để tạo cảm giác tôn trọng. Kết thúc bằng câu trấn an — đó là "liều thuốc lời nói" hiệu quả nhất.'
        },
        {
          id: 'd3', icon: '🔢',
          title: 'Số Đếm, Ngày Tháng & Giờ Lâm Sàng',
          titleEn: 'Clinical Numbers, Dates & Time',
          description: 'Đọc số đếm lâm sàng, đếm liều lượng thuốc, đọc các chỉ số sinh hiệu (huyết áp, nhiệt độ) và sắp xếp thời gian làm việc.',
          duration: '2 tuần', skills: ['listening','speaking','vocabulary'],
          objectives: ['Đọc chuẩn xác số đếm thông thường và phân biệt teen vs ty','Nói chính xác liều lượng thuốc (mg, ml, viên)','Đọc lưu loát các chỉ số sinh hiệu (nhiệt độ, huyết áp, nhịp tim)','Hỏi và trả lời giờ hẹn khám, giờ uống thuốc'],
          vocabulary: [
            {en: 'Blood pressure (BP)', vi: 'Huyết áp', phonetic: '/blʌd ˈpreʃ.ər/'},
            {en: 'Heart rate / Pulse', vi: 'Nhịp tim / Mạch', phonetic: '/hɑːt reɪt/ /pʌls/'},
            {en: 'Temperature', vi: 'Nhiệt độ', phonetic: '/ˈtem.prə.tʃər/'},
            {en: 'Milligram (mg)', vi: 'Mi-li-gam', phonetic: '/ˈmɪl.ɪ.ɡræm/'},
            {en: 'Milliliter (ml)', vi: 'Mi-li-lít', phonetic: '/ˈmɪl.ɪˌliː.tər/'},
            {en: 'Dose / Dosage', vi: 'Liều lượng', phonetic: '/doʊs/ /ˈdoʊ.sɪdʒ/'}
          ],
          phrases: [
            {en: 'Your blood pressure is 120 over 80.', vi: 'Huyết áp của bác là 120 trên 80.'},
            {en: 'Your temperature is 37.5 degrees Celsius.', vi: 'Nhiệt độ của bác là 37.5 độ C.'},
            {en: 'Take two tablets every six hours.', vi: 'Uống hai viên thuốc này mỗi sáu tiếng.'},
            {en: 'Please take 5 milliliters of this syrup.', vi: 'Vui lòng uống 5 mi-li-lít si-rô này.'},
            {en: 'Your next appointment is at 2:30 PM.', vi: 'Lịch hẹn tiếp theo của bác là lúc 2 giờ 30 chiều.'}
          ],
          practice: ['Tập đọc nhanh 10 chỉ số đo huyết áp và nhịp tim mẫu','Đọc to đơn thuốc với liều lượng và giờ giấc khác nhau','Đóng vai y tá thông báo lịch hẹn và hướng dẫn giờ uống thuốc'],
          tip: 'Đặc biệt cẩn thận khi đọc số để tránh nhầm lẫn nghiêm trọng: Ví dụ 15 (fifteen) khác hoàn toàn 50 (fifty). Hãy nhấn mạnh âm đuôi -teen để người nghe không hiểu lầm.'
        },
        {
          id: 'd4', icon: '👨‍👩‍👧‍👦',
          title: 'Gia Đình & Mối Quan Hệ',
          titleEn: 'Family & Relationships',
          description: 'Tên gọi các thành viên gia đình, mô tả mối quan hệ.',
          duration: '1 tuần', skills: ['vocabulary','speaking'],
          objectives: ['Gọi tên thành viên gia đình','Mô tả gia đình mình','Hỏi về gia đình người khác'],
          vocabulary: [
            {en: 'Parents', vi: 'Bố mẹ', phonetic: '/ˈper.ənts/'},
            {en: 'Sibling', vi: 'Anh chị em', phonetic: '/ˈsɪb.lɪŋ/'},
            {en: 'Husband / Wife', vi: 'Chồng / Vợ', phonetic: '/ˈhʌz.bənd/ /waɪf/'},
            {en: 'Son / Daughter', vi: 'Con trai / gái', phonetic: '/sʌn/ /ˈdɔː.tər/'},
            {en: 'Grandparents', vi: 'Ông bà', phonetic: '/ˈɡræn.per.ənts/'},
            {en: 'Relative', vi: 'Họ hàng', phonetic: '/ˈrel.ə.tɪv/'}
          ],
          phrases: [
            {en: 'I have two brothers and one sister.', vi: 'Tôi có hai anh trai và một chị gái.'},
            {en: 'Do you have any children?', vi: 'Bạn có con không?'},
            {en: 'My mother is a teacher.', vi: 'Mẹ tôi là giáo viên.'},
            {en: 'We are a family of five.', vi: 'Gia đình tôi có 5 người.'}
          ],
          practice: ['Vẽ sơ đồ gia đình bằng tiếng Anh','Giới thiệu gia đình trong 1 phút','Hỏi 3 người về gia đình họ'],
          tip: 'Khi chăm sóc bệnh nhân, bạn thường cần hỏi về người thân — luyện chủ đề này rất thực tế!'
        },
        {
          id: 'd5', icon: '🍎',
          title: 'Thức Ăn & Đồ Uống',
          titleEn: 'Food & Drinks',
          description: 'Tên các món ăn, đồ uống phổ biến và cách diễn đạt sở thích ăn uống.',
          duration: '1 tuần', skills: ['vocabulary','speaking','listening'],
          objectives: ['Gọi tên 30+ món ăn và đồ uống','Nói về sở thích ăn uống','Hiểu menu cơ bản bằng tiếng Anh'],
          vocabulary: [
            {en: 'Rice', vi: 'Cơm', phonetic: '/raɪs/'},
            {en: 'Chicken', vi: 'Thịt gà', phonetic: '/ˈtʃɪk.ɪn/'},
            {en: 'Vegetable', vi: 'Rau', phonetic: '/ˈvedʒ.tə.bəl/'},
            {en: 'Water', vi: 'Nước', phonetic: '/ˈwɔː.tər/'},
            {en: 'Coffee', vi: 'Cà phê', phonetic: '/ˈkɒf.i/'},
            {en: 'Allergic', vi: 'Dị ứng', phonetic: '/əˈlɜː.dʒɪk/'}
          ],
          phrases: [
            {en: 'I would like some water, please.', vi: 'Cho tôi xin nước.'},
            {en: 'Are you allergic to any food?', vi: 'Bạn có dị ứng thức ăn nào không?'},
            {en: 'I prefer chicken over beef.', vi: 'Tôi thích gà hơn bò.'},
            {en: 'What would you like to eat?', vi: 'Bạn muốn ăn gì?'}
          ],
          practice: ['Gọi tên đồ ăn trong bữa cơm bằng tiếng Anh','Tập gọi món tại quán ăn','Hỏi bệnh nhân về chế độ ăn kiêng'],
          tip: 'Y tá cần hỏi bệnh nhân về dị ứng thức ăn — học từ "allergic" thật kỹ!'
        },
        {
          id: 'd6', icon: '🏠',
          title: 'Các Hoạt Động Hàng Ngày',
          titleEn: 'Daily Routines & Activities',
          description: 'Mô tả thói quen hàng ngày: thức dậy, đi làm, ăn uống, ngủ.',
          duration: '1 tuần', skills: ['speaking','vocabulary'],
          objectives: ['Mô tả lịch trình ngày thường','Dùng thì hiện tại đơn cơ bản','Hỏi người khác về thói quen'],
          vocabulary: [
            {en: 'Wake up', vi: 'Thức dậy', phonetic: '/weɪk ʌp/'},
            {en: 'Go to work', vi: 'Đi làm', phonetic: '/ɡoʊ tə wɜːrk/'},
            {en: 'Take a shower', vi: 'Tắm', phonetic: '/teɪk ə ˈʃaʊ.ər/'},
            {en: 'Have breakfast', vi: 'Ăn sáng', phonetic: '/hæv ˈbrek.fəst/'},
            {en: 'Go to bed', vi: 'Đi ngủ', phonetic: '/ɡoʊ tə bed/'},
            {en: 'Exercise', vi: 'Tập thể dục', phonetic: '/ˈek.sər.saɪz/'}
          ],
          phrases: [
            {en: 'I usually wake up at 6 AM.', vi: 'Tôi thường dậy lúc 6 giờ sáng.'},
            {en: 'What do you do in the morning?', vi: 'Buổi sáng bạn làm gì?'},
            {en: 'I work the night shift.', vi: 'Tôi làm ca đêm.'},
            {en: 'After work, I go home and rest.', vi: 'Sau giờ làm, tôi về nhà nghỉ ngơi.'}
          ],
          practice: ['Mô tả một ngày làm việc của bạn','Hỏi đồng nghiệp về thói quen sáng','Viết 7 câu về lịch trình hàng ngày'],
          tip: 'Tập nói thói quen giúp bạn quen cấu trúc câu cơ bản I + verb mỗi ngày.'
        },
        {
          id: 'd7', icon: '❓',
          title: 'Đặt Câu Hỏi Cơ Bản',
          titleEn: 'Basic Questions (Wh-Questions)',
          description: 'Sử dụng What, Where, When, Who, Why, How để đặt câu hỏi.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Đặt câu hỏi với 6 từ Wh-','Trả lời câu hỏi đúng ngữ pháp','Dùng câu hỏi trong giao tiếp hàng ngày'],
          vocabulary: [
            {en: 'What', vi: 'Cái gì', phonetic: '/wɒt/'},
            {en: 'Where', vi: 'Ở đâu', phonetic: '/wer/'},
            {en: 'When', vi: 'Khi nào', phonetic: '/wen/'},
            {en: 'Who', vi: 'Ai', phonetic: '/huː/'},
            {en: 'Why', vi: 'Tại sao', phonetic: '/waɪ/'},
            {en: 'How', vi: 'Như thế nào', phonetic: '/haʊ/'}
          ],
          phrases: [
            {en: 'What is your name?', vi: 'Tên bạn là gì?'},
            {en: 'Where do you live?', vi: 'Bạn sống ở đâu?'},
            {en: 'When does the hospital open?', vi: 'Bệnh viện mở cửa khi nào?'},
            {en: 'How do you feel today?', vi: 'Hôm nay bạn cảm thấy thế nào?'}
          ],
          practice: ['Đặt 10 câu hỏi Wh- về đồng nghiệp','Role-play hỏi thông tin bệnh nhân','Nghe và trả lời câu hỏi từ audio'],
          tip: 'Trong y tế, Wh-questions là công cụ quan trọng nhất: What hurts? Where is the pain? When did it start?'
        },
        {
          id: 'd8', icon: '🎨',
          title: 'Màu Sắc & Mô Tả Đồ Vật',
          titleEn: 'Colors, Shapes & Describing Objects',
          description: 'Mô tả màu sắc, kích thước, hình dáng của đồ vật trong cuộc sống và công việc y tế.',
          duration: '2 tuần', skills: ['vocabulary','speaking','listening'],
          objectives: ['Gọi tên 15+ màu sắc và hình dáng cơ bản','Mô tả kích thước và đặc điểm đồ vật','Áp dụng mô tả thuốc và thiết bị y tế đơn giản'],
          vocabulary: [
            {en: 'Color', vi: 'Màu sắc', phonetic: '/ˈkʌl.ər/'},
            {en: 'Shape', vi: 'Hình dáng', phonetic: '/ʃeɪp/'},
            {en: 'Red / Blue / Yellow', vi: 'Đỏ / Xanh dương / Vàng', phonetic: ''},
            {en: 'Big / Small / Medium', vi: 'To / Nhỏ / Vừa', phonetic: ''},
            {en: 'Round / Square / Oval', vi: 'Tròn / Vuông / Bầu dục', phonetic: ''},
            {en: 'Pill / Tablet / Capsule', vi: 'Viên tròn / Viên nén / Viên nhộng', phonetic: ''}
          ],
          phrases: [
            {en: 'What color is the pill?', vi: 'Viên thuốc màu gì?'},
            {en: 'It is a small, round yellow tablet.', vi: 'Nó là một viên thuốc nén màu vàng, nhỏ và tròn.'},
            {en: 'Please give me the big bottle.', vi: 'Vui lòng đưa tôi cái chai lớn.'},
            {en: 'The warning sign is a red triangle.', vi: 'Biển cảnh báo là một hình tam giác màu đỏ.'}
          ],
          practice: ['Mô tả màu sắc và hình dáng của 5 loại thuốc trong tủ thuốc','Tập mô tả các đồ vật cá nhân quanh phòng ngủ','Hỏi và trả lời về đặc điểm các thiết bị y tế cơ bản'],
          tip: 'Khi mô tả, quy tắc sắp xếp tính từ cơ bản là Kích thước -> Hình dáng -> Màu sắc (ví dụ: a small, round, yellow pill).'
        }
      ]
    },
    {
      id: 'daily-p2',
      name: 'Giai đoạn 2: Giao Tiếp Cơ Bản',
      duration: 'Tháng 4–6',
      icon: '💬',
      description: 'Áp dụng tiếng Anh trong các tình huống mua sắm, ăn uống, di chuyển, liên lạc.',
      lessons: [
        {
          id: 'd9', icon: '🛒',
          title: 'Đi Chợ & Mua Sắm',
          titleEn: 'Shopping & Markets',
          description: 'Hỏi giá, trả giá, thanh toán và mua sắm bằng tiếng Anh.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Hỏi giá sản phẩm','Trả giá và thương lượng','Thanh toán bằng tiền mặt hoặc thẻ'],
          vocabulary: [
            {en:'How much',vi:'Bao nhiêu tiền',phonetic:'/haʊ mʌtʃ/'},
            {en:'Discount',vi:'Giảm giá',phonetic:'/ˈdɪs.kaʊnt/'},
            {en:'Receipt',vi:'Hóa đơn',phonetic:'/rɪˈsiːt/'},
            {en:'Cash',vi:'Tiền mặt',phonetic:'/kæʃ/'},
            {en:'Credit card',vi:'Thẻ tín dụng',phonetic:'/ˈkred.ɪt kɑːrd/'},
            {en:'Size',vi:'Kích cỡ',phonetic:'/saɪz/'}
          ],
          phrases: [
            {en:'How much does this cost?',vi:'Cái này giá bao nhiêu?'},
            {en:'Can I pay by card?',vi:'Tôi có thể trả bằng thẻ không?'},
            {en:'Do you have a smaller size?',vi:'Bạn có cỡ nhỏ hơn không?'},
            {en:'Can I get a receipt, please?',vi:'Cho tôi xin hóa đơn.'}
          ],
          practice: ['Tập mua đồ ở cửa hàng nước ngoài','Role-play bán hàng với bạn','Nghe hội thoại mua sắm và lặp lại'],
          tip: 'Ghi nhớ các số tiền bằng tiếng Anh — rất cần thiết khi đi nước ngoài.'
        },
        {
          id: 'd10', icon: '🍽️',
          title: 'Nhà Hàng & Gọi Món',
          titleEn: 'Restaurant & Ordering Food',
          description: 'Đặt bàn, gọi món, yêu cầu hóa đơn tại nhà hàng.',
          duration: '1 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Đặt bàn qua điện thoại','Đọc menu và gọi món','Yêu cầu thanh toán'],
          vocabulary: [
            {en:'Menu',vi:'Thực đơn',phonetic:'/ˈmen.juː/'},
            {en:'Appetizer',vi:'Món khai vị',phonetic:'/ˈæp.ə.taɪ.zər/'},
            {en:'Main course',vi:'Món chính',phonetic:'/meɪn kɔːrs/'},
            {en:'Dessert',vi:'Tráng miệng',phonetic:'/dɪˈzɜːrt/'},
            {en:'Bill / Check',vi:'Hóa đơn',phonetic:'/bɪl/ /tʃek/'},
            {en:'Tip',vi:'Tiền boa',phonetic:'/tɪp/'}
          ],
          phrases: [
            {en:'A table for two, please.',vi:'Cho tôi bàn hai người.'},
            {en:"I'll have the chicken salad.",vi:'Tôi lấy salad gà.'},
            {en:'Could I have the bill, please?',vi:'Cho tôi xin hóa đơn.'},
            {en:'Is this dish spicy?',vi:'Món này có cay không?'}
          ],
          practice: ['Role-play gọi món ở nhà hàng','Đọc menu tiếng Anh online','Tập gọi đồ uống ở quán cà phê'],
          tip: 'Nhớ nói "please" và "thank you" — lịch sự rất quan trọng trong văn hóa Anh-Mỹ.'
        },
        {
          id: 'd11', icon: '🗺️',
          title: 'Hỏi Đường & Chỉ Đường',
          titleEn: 'Asking & Giving Directions',
          description: 'Hỏi và chỉ đường đến các địa điểm, sử dụng từ chỉ phương hướng.',
          duration: '1 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Hỏi đường bằng tiếng Anh','Hiểu hướng dẫn chỉ đường','Dùng từ chỉ vị trí: left, right, straight'],
          vocabulary: [
            {en:'Turn left / right',vi:'Rẽ trái / phải',phonetic:'/tɜːrn left/ /raɪt/'},
            {en:'Go straight',vi:'Đi thẳng',phonetic:'/ɡoʊ streɪt/'},
            {en:'Intersection',vi:'Ngã tư',phonetic:'/ˌɪn.tərˈsek.ʃən/'},
            {en:'Next to',vi:'Bên cạnh',phonetic:'/nekst tuː/'},
            {en:'Opposite',vi:'Đối diện',phonetic:'/ˈɒp.ə.zɪt/'},
            {en:'Block',vi:'Dãy nhà',phonetic:'/blɒk/'}
          ],
          phrases: [
            {en:'Excuse me, how do I get to the hospital?',vi:'Xin lỗi, làm sao đến bệnh viện?'},
            {en:'Is it far from here?',vi:'Có xa đây không?'},
            {en:'Turn right at the traffic light.',vi:'Rẽ phải ở đèn giao thông.'},
            {en:"It's on your left.",vi:'Nó ở bên trái bạn.'}
          ],
          practice: ['Vẽ bản đồ khu phố và chỉ đường cho bạn','Nghe audio chỉ đường và vẽ lại','Tập chỉ đường đến bệnh viện'],
          tip: 'Khi bệnh nhân hay người nhà hỏi đường trong bệnh viện, bạn cần chỉ dẫn rõ ràng.'
        },
        {
          id: 'd12', icon: '🚌',
          title: 'Phương Tiện Giao Thông',
          titleEn: 'Transportation',
          description: 'Gọi taxi, mua vé xe buýt, hỏi lộ trình di chuyển.',
          duration: '1 tuần', skills: ['speaking','vocabulary','listening'],
          objectives: ['Gọi tên phương tiện giao thông','Mua vé và hỏi giá','Hỏi lộ trình xe buýt/tàu'],
          vocabulary: [
            {en:'Bus',vi:'Xe buýt',phonetic:'/bʌs/'},
            {en:'Taxi / Cab',vi:'Xe taxi',phonetic:'/ˈtæk.si/'},
            {en:'Train',vi:'Tàu hỏa',phonetic:'/treɪn/'},
            {en:'Ticket',vi:'Vé',phonetic:'/ˈtɪk.ɪt/'},
            {en:'Station',vi:'Ga / Trạm',phonetic:'/ˈsteɪ.ʃən/'},
            {en:'Fare',vi:'Giá vé',phonetic:'/fer/'}
          ],
          phrases: [
            {en:'Where is the bus stop?',vi:'Trạm xe buýt ở đâu?'},
            {en:'One ticket to downtown, please.',vi:'Cho tôi một vé đến trung tâm.'},
            {en:'How long does it take by taxi?',vi:'Đi taxi mất bao lâu?'},
            {en:'Could you take me to this address?',vi:'Bạn có thể chở tôi đến địa chỉ này?'}
          ],
          practice: ['Tập gọi taxi bằng tiếng Anh','Hỏi đường đến bệnh viện bằng xe buýt','Role-play mua vé tàu'],
          tip: 'Học thuộc địa chỉ nơi làm việc bằng tiếng Anh để có thể hướng dẫn ai đó đến.'
        },
        {
          id: 'd13', icon: '☀️',
          title: 'Thời Tiết & Mùa',
          titleEn: 'Weather & Seasons',
          description: 'Mô tả thời tiết, nói về các mùa và trang phục phù hợp.',
          duration: '1 tuần', skills: ['vocabulary','speaking','listening'],
          objectives: ['Mô tả thời tiết hôm nay','Nói về 4 mùa trong năm','Gợi ý trang phục phù hợp'],
          vocabulary: [
            {en:'Sunny',vi:'Nắng',phonetic:'/ˈsʌn.i/'},
            {en:'Rainy',vi:'Mưa',phonetic:'/ˈreɪ.ni/'},
            {en:'Cold',vi:'Lạnh',phonetic:'/koʊld/'},
            {en:'Hot',vi:'Nóng',phonetic:'/hɑːt/'},
            {en:'Temperature',vi:'Nhiệt độ',phonetic:'/ˈtem.prə.tʃər/'},
            {en:'Humidity',vi:'Độ ẩm',phonetic:'/hjuːˈmɪd.ə.ti/'}
          ],
          phrases: [
            {en:"It's very hot today.",vi:'Hôm nay rất nóng.'},
            {en:"What's the weather like?",vi:'Thời tiết thế nào?'},
            {en:'You should wear a jacket.',vi:'Bạn nên mặc áo khoác.'},
            {en:'The temperature is 35 degrees.',vi:'Nhiệt độ là 35 độ.'}
          ],
          practice: ['Mô tả thời tiết mỗi sáng bằng tiếng Anh','Nghe dự báo thời tiết bằng tiếng Anh','Tập nói về thời tiết với đồng nghiệp'],
          tip: 'Từ "temperature" rất quan trọng — dùng cả trong y tế lẫn thời tiết.'
        },
        {
          id: 'd14', icon: '💊',
          title: 'Sức Khỏe Cơ Bản',
          titleEn: 'Basic Health Conversations',
          description: 'Mô tả triệu chứng đơn giản, hẹn khám bác sĩ, mua thuốc.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Mô tả triệu chứng bệnh cơ bản','Đặt lịch khám','Hỏi mua thuốc ở hiệu thuốc'],
          vocabulary: [
            {en:'Headache',vi:'Đau đầu',phonetic:'/ˈhed.eɪk/'},
            {en:'Fever',vi:'Sốt',phonetic:'/ˈfiː.vər/'},
            {en:'Cough',vi:'Ho',phonetic:'/kɒf/'},
            {en:'Stomachache',vi:'Đau bụng',phonetic:'/ˈstʌm.ək.eɪk/'},
            {en:'Medicine',vi:'Thuốc',phonetic:'/ˈmed.ɪ.sən/'},
            {en:'Appointment',vi:'Cuộc hẹn khám',phonetic:'/əˈpɔɪnt.mənt/'}
          ],
          phrases: [
            {en:'I have a terrible headache.',vi:'Tôi bị đau đầu kinh khủng.'},
            {en:"I'd like to make an appointment.",vi:'Tôi muốn đặt lịch hẹn khám.'},
            {en:'Do you have anything for a cold?',vi:'Bạn có thuốc cảm không?'},
            {en:'How often should I take this medicine?',vi:'Tôi nên uống thuốc này bao lâu một lần?'}
          ],
          practice: ['Role-play bệnh nhân đi khám','Tập mô tả 5 triệu chứng phổ biến','Nghe hội thoại ở phòng khám'],
          tip: 'Đây là cầu nối giữa tiếng Anh đời thường và chuyên ngành — học thật kỹ phần này!'
        },
        {
          id: 'd15', icon: '📱',
          title: 'Điện Thoại & Liên Lạc',
          titleEn: 'Phone Calls & Communication',
          description: 'Nghe và gọi điện thoại, để lại tin nhắn, liên lạc qua email cơ bản.',
          duration: '1 tuần', skills: ['speaking','listening'],
          objectives: ['Nghe và trả lời đt bằng tiếng Anh','Để lại lời nhắn','Viết tin nhắn/email ngắn'],
          vocabulary: [
            {en:'Phone call',vi:'Cuộc gọi',phonetic:'/foʊn kɔːl/'},
            {en:'Voicemail',vi:'Hộp thư thoại',phonetic:'/ˈvɔɪs.meɪl/'},
            {en:'Hold on',vi:'Chờ một chút',phonetic:'/hoʊld ɒn/'},
            {en:'Extension',vi:'Số nội bộ',phonetic:'/ɪkˈsten.ʃən/'},
            {en:'Message',vi:'Tin nhắn',phonetic:'/ˈmes.ɪdʒ/'},
            {en:'Available',vi:'Rảnh / có mặt',phonetic:'/əˈveɪ.lə.bəl/'}
          ],
          phrases: [
            {en:'Hello, this is [name] speaking.',vi:'Xin chào, tôi là [tên] đang nghe.'},
            {en:'May I speak to Dr. Smith, please?',vi:'Cho tôi nói chuyện với bác sĩ Smith.'},
            {en:'Could you hold on a moment?',vi:'Bạn chờ một chút được không?'},
            {en:'I will leave a message.',vi:'Tôi sẽ để lại lời nhắn.'}
          ],
          practice: ['Role-play gọi điện đặt lịch khám','Tập nghe tin nhắn thoại tiếng Anh','Gọi điện hỏi thông tin bằng tiếng Anh'],
          tip: 'Y tá thường phải trả lời điện thoại — luyện nghe qua điện thoại rất quan trọng!'
        },
        {
          id: 'd16', icon: '😊',
          title: 'Cảm Xúc & Tính Cách',
          titleEn: 'Emotions & Personality',
          description: 'Diễn đạt cảm xúc, mô tả tính cách và trạng thái tinh thần.',
          duration: '1 tuần', skills: ['vocabulary','speaking'],
          objectives: ['Mô tả cảm xúc hiện tại','Hỏi người khác cảm thấy thế nào','Dùng tính từ mô tả tính cách'],
          vocabulary: [
            {en:'Happy',vi:'Vui',phonetic:'/ˈhæp.i/'},
            {en:'Sad',vi:'Buồn',phonetic:'/sæd/'},
            {en:'Anxious',vi:'Lo lắng',phonetic:'/ˈæŋk.ʃəs/'},
            {en:'Tired',vi:'Mệt mỏi',phonetic:'/taɪərd/'},
            {en:'Comfortable',vi:'Thoải mái',phonetic:'/ˈkʌmf.tə.bəl/'},
            {en:'Scared',vi:'Sợ hãi',phonetic:'/skerd/'}
          ],
          phrases: [
            {en:'How are you feeling?',vi:'Bạn cảm thấy thế nào?'},
            {en:"I'm feeling much better now.",vi:'Tôi cảm thấy tốt hơn nhiều rồi.'},
            {en:"Don't worry, you'll be fine.",vi:'Đừng lo, bạn sẽ ổn thôi.'},
            {en:'Are you comfortable?',vi:'Bạn có thoải mái không?'}
          ],
          practice: ['Mô tả cảm xúc mỗi ngày bằng tiếng Anh','Hỏi đồng nghiệp "How are you feeling?"','Tập an ủi bệnh nhân bằng tiếng Anh'],
          tip: 'Hiểu cảm xúc bệnh nhân là kỹ năng cốt lõi của y tá — học từ vựng cảm xúc thật tốt.'
        }
      ]
    },
    {
      id: 'daily-p3',
      name: 'Giai đoạn 3: Giao Tiếp Tự Tin',
      duration: 'Tháng 7–9',
      icon: '🚀',
      description: 'Nâng cao khả năng giao tiếp trong tình huống phức tạp: du lịch, công sở, phỏng vấn.',
      lessons: [
        {
          id: 'd17', icon: '✈️',
          title: 'Du Lịch & Sân Bay',
          titleEn: 'Travel & Airport',
          description: 'Thủ tục sân bay, check-in, hải quan và di chuyển nước ngoài.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Hoàn thành thủ tục check-in','Qua cửa hải quan','Hỏi thông tin chuyến bay'],
          vocabulary: [
            {en:'Passport',vi:'Hộ chiếu',phonetic:'/ˈpæs.pɔːrt/'},
            {en:'Boarding pass',vi:'Thẻ lên máy bay',phonetic:'/ˈbɔːr.dɪŋ pæs/'},
            {en:'Gate',vi:'Cổng lên máy bay',phonetic:'/ɡeɪt/'},
            {en:'Luggage',vi:'Hành lý',phonetic:'/ˈlʌɡ.ɪdʒ/'},
            {en:'Customs',vi:'Hải quan',phonetic:'/ˈkʌs.təmz/'},
            {en:'Delayed',vi:'Bị hoãn',phonetic:'/dɪˈleɪd/'}
          ],
          phrases: [
            {en:'Where is gate number 5?',vi:'Cổng số 5 ở đâu?'},
            {en:'I have nothing to declare.',vi:'Tôi không có gì cần khai báo.'},
            {en:'Is the flight on time?',vi:'Chuyến bay có đúng giờ không?'},
            {en:'I would like an aisle seat.',vi:'Tôi muốn ghế cạnh lối đi.'}
          ],
          practice: ['Role-play check-in tại sân bay','Nghe thông báo sân bay tiếng Anh','Tập khai báo hải quan'],
          tip: 'Nếu có cơ hội du lịch hoặc học tập nước ngoài, đây là bài học thiết yếu nhất.'
        },
        {
          id: 'd18', icon: '🏨',
          title: 'Đặt Phòng Khách Sạn',
          titleEn: 'Hotel Booking & Stay',
          description: 'Đặt phòng, check-in/out, yêu cầu dịch vụ tại khách sạn.',
          duration: '1 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Đặt phòng qua điện thoại/online','Check-in và check-out','Yêu cầu dịch vụ phòng'],
          vocabulary: [
            {en:'Reservation',vi:'Đặt phòng',phonetic:'/ˌrez.ərˈveɪ.ʃən/'},
            {en:'Single/Double room',vi:'Phòng đơn/đôi',phonetic:''},
            {en:'Check-in / Check-out',vi:'Nhận/trả phòng',phonetic:''},
            {en:'Room service',vi:'Dịch vụ phòng',phonetic:''},
            {en:'Key card',vi:'Thẻ phòng',phonetic:'/kiː kɑːrd/'},
            {en:'Wi-Fi password',vi:'Mật khẩu Wi-Fi',phonetic:''}
          ],
          phrases: [
            {en:'I have a reservation under [name].',vi:'Tôi đã đặt phòng tên [tên].'},
            {en:'What time is check-out?',vi:'Mấy giờ trả phòng?'},
            {en:'Could I get extra towels?',vi:'Cho tôi thêm khăn tắm được không?'},
            {en:'The air conditioning is not working.',vi:'Máy lạnh không hoạt động.'}
          ],
          practice: ['Role-play đặt phòng khách sạn','Tập phàn nàn về phòng','Gọi điện yêu cầu dịch vụ'],
          tip: 'Kỹ năng phàn nàn lịch sự rất quan trọng — dùng "Could you...?" thay vì ra lệnh.'
        },
        {
          id: 'd19', icon: '💭',
          title: 'Trình Bày Ý Kiến',
          titleEn: 'Expressing Opinions',
          description: 'Đưa ra ý kiến, đồng ý/không đồng ý một cách lịch sự.',
          duration: '1 tuần', skills: ['speaking','listening'],
          objectives: ['Đưa ra ý kiến cá nhân','Đồng ý và phản đối lịch sự','Hỏi ý kiến người khác'],
          vocabulary: [
            {en:'I think...',vi:'Tôi nghĩ...',phonetic:'/aɪ θɪŋk/'},
            {en:'In my opinion',vi:'Theo ý kiến tôi',phonetic:''},
            {en:'I agree',vi:'Tôi đồng ý',phonetic:'/aɪ əˈɡriː/'},
            {en:'I disagree',vi:'Tôi không đồng ý',phonetic:'/aɪ ˌdɪs.əˈɡriː/'},
            {en:'Absolutely',vi:'Hoàn toàn đúng',phonetic:'/ˈæb.sə.luːt.li/'},
            {en:'Perhaps',vi:'Có lẽ',phonetic:'/pərˈhæps/'}
          ],
          phrases: [
            {en:'I think we should change the schedule.',vi:'Tôi nghĩ chúng ta nên đổi lịch.'},
            {en:"I see your point, but...",vi:'Tôi hiểu ý bạn, nhưng...'},
            {en:'What do you think about this?',vi:'Bạn nghĩ gì về việc này?'},
            {en:"That's a great idea!",vi:'Ý tưởng hay đấy!'}
          ],
          practice: ['Thảo luận một chủ đề đơn giản bằng tiếng Anh','Tập đồng ý/phản đối trong cuộc họp','Viết 5 ý kiến về chủ đề sức khỏe'],
          tip: 'Trong môi trường quốc tế, biết cách đưa ý kiến lịch sự là kỹ năng mềm rất cần.'
        },
        {
          id: 'd20', icon: '📖',
          title: 'Kể Chuyện & Mô Tả',
          titleEn: 'Storytelling & Description',
          description: 'Kể lại sự kiện, mô tả người/vật/nơi chốn bằng tiếng Anh.',
          duration: '1 tuần', skills: ['speaking','vocabulary'],
          objectives: ['Kể lại sự kiện quá khứ','Mô tả người và đồ vật','Sắp xếp câu chuyện logic'],
          vocabulary: [
            {en:'First / Then / Finally',vi:'Đầu tiên / Sau đó / Cuối cùng',phonetic:''},
            {en:'Yesterday',vi:'Hôm qua',phonetic:'/ˈjes.tər.deɪ/'},
            {en:'Last week',vi:'Tuần trước',phonetic:''},
            {en:'Suddenly',vi:'Đột nhiên',phonetic:'/ˈsʌd.ən.li/'},
            {en:'Beautiful',vi:'Đẹp',phonetic:'/ˈbjuː.tɪ.fəl/'},
            {en:'Describe',vi:'Mô tả',phonetic:'/dɪˈskraɪb/'}
          ],
          phrases: [
            {en:'Let me tell you what happened.',vi:'Để tôi kể cho bạn nghe chuyện gì đã xảy ra.'},
            {en:'First, I went to the hospital...',vi:'Đầu tiên, tôi đến bệnh viện...'},
            {en:'She is tall with long black hair.',vi:'Cô ấy cao, có tóc dài đen.'},
            {en:'It was an amazing experience.',vi:'Đó là trải nghiệm tuyệt vời.'}
          ],
          practice: ['Kể lại ngày hôm qua bằng tiếng Anh','Mô tả đồng nghiệp cho người khác','Kể một kỷ niệm đáng nhớ'],
          tip: 'Kể chuyện giúp bạn luyện nói dài — rất quan trọng để thoát khỏi giao tiếp ngắn.'
        },
        {
          id: 'd21', icon: '🏢',
          title: 'Giao Tiếp Nơi Công Sở',
          titleEn: 'Workplace Communication',
          description: 'Giao tiếp với đồng nghiệp, họp, báo cáo và email công việc.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Tham gia cuộc họp bằng tiếng Anh','Viết email công việc đơn giản','Báo cáo công việc'],
          vocabulary: [
            {en:'Meeting',vi:'Cuộc họp',phonetic:'/ˈmiː.tɪŋ/'},
            {en:'Deadline',vi:'Hạn chót',phonetic:'/ˈded.laɪn/'},
            {en:'Report',vi:'Báo cáo',phonetic:'/rɪˈpɔːrt/'},
            {en:'Schedule',vi:'Lịch trình',phonetic:'/ˈskedʒ.uːl/'},
            {en:'Colleague',vi:'Đồng nghiệp',phonetic:'/ˈkɒl.iːɡ/'},
            {en:'Overtime',vi:'Tăng ca',phonetic:'/ˈoʊ.vər.taɪm/'}
          ],
          phrases: [
            {en:'I would like to report that...',vi:'Tôi muốn báo cáo rằng...'},
            {en:"Can we schedule a meeting?",vi:'Chúng ta hẹn họp được không?'},
            {en:'I need to work overtime today.',vi:'Hôm nay tôi cần tăng ca.'},
            {en:'Could you send me the report?',vi:'Bạn gửi báo cáo cho tôi được không?'}
          ],
          practice: ['Viết 3 email ngắn bằng tiếng Anh','Role-play cuộc họp nhóm','Tập báo cáo công việc 2 phút'],
          tip: 'Trong bệnh viện quốc tế, email và họp bằng tiếng Anh là thường xuyên.'
        },
        {
          id: 'd22', icon: '💼',
          title: 'Phỏng Vấn Xin Việc',
          titleEn: 'Job Interview',
          description: 'Chuẩn bị phỏng vấn, trả lời câu hỏi tuyển dụng, nói về kinh nghiệm.',
          duration: '2 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Trả lời 10 câu hỏi phỏng vấn phổ biến','Nói về kinh nghiệm làm việc','Hỏi về công việc và chế độ'],
          vocabulary: [
            {en:'Resume / CV',vi:'Sơ yếu lý lịch',phonetic:'/ˈrez.ʊ.meɪ/'},
            {en:'Experience',vi:'Kinh nghiệm',phonetic:'/ɪkˈspɪr.i.əns/'},
            {en:'Strength',vi:'Điểm mạnh',phonetic:'/streŋθ/'},
            {en:'Weakness',vi:'Điểm yếu',phonetic:'/ˈwiːk.nəs/'},
            {en:'Salary',vi:'Lương',phonetic:'/ˈsæl.ər.i/'},
            {en:'Benefit',vi:'Phúc lợi',phonetic:'/ˈben.ɪ.fɪt/'}
          ],
          phrases: [
            {en:'I have 3 years of experience as a nurse.',vi:'Tôi có 3 năm kinh nghiệm làm y tá.'},
            {en:'My strength is patient care.',vi:'Điểm mạnh của tôi là chăm sóc bệnh nhân.'},
            {en:'Why do you want to work here?',vi:'Tại sao bạn muốn làm việc ở đây?'},
            {en:'What is the salary range?',vi:'Mức lương khoảng bao nhiêu?'}
          ],
          practice: ['Role-play phỏng vấn y tá quốc tế','Chuẩn bị bài giới thiệu 2 phút','Tập trả lời 10 câu hỏi phỏng vấn'],
          tip: 'Phỏng vấn bằng tiếng Anh là cơ hội vàng — chuẩn bị kỹ và tập nhiều lần!'
        },
        {
          id: 'd23', icon: '🌏',
          title: 'Văn Hóa & Phong Tục',
          titleEn: 'Culture & Customs',
          description: 'Tìm hiểu văn hóa Anh-Mỹ, giao tiếp đa văn hóa, tránh hiểu lầm.',
          duration: '1 tuần', skills: ['vocabulary','listening','speaking'],
          objectives: ['Hiểu khác biệt văn hóa cơ bản','Giao tiếp phù hợp với người bản xứ','Tránh những lỗi văn hóa phổ biến'],
          vocabulary: [
            {en:'Custom',vi:'Phong tục',phonetic:'/ˈkʌs.təm/'},
            {en:'Polite',vi:'Lịch sự',phonetic:'/pəˈlaɪt/'},
            {en:'Privacy',vi:'Sự riêng tư',phonetic:'/ˈpraɪ.və.si/'},
            {en:'Small talk',vi:'Chuyện phiếm',phonetic:'/smɔːl tɔːk/'},
            {en:'Respectful',vi:'Tôn trọng',phonetic:'/rɪˈspekt.fəl/'},
            {en:'Taboo',vi:'Cấm kỵ',phonetic:'/təˈbuː/'}
          ],
          phrases: [
            {en:'In my country, we usually...',vi:'Ở nước tôi, chúng tôi thường...'},
            {en:"That's very interesting!",vi:'Thật thú vị!'},
            {en:'I respect your culture.',vi:'Tôi tôn trọng văn hóa của bạn.'},
            {en:'Could you explain that custom to me?',vi:'Bạn giải thích phong tục đó cho tôi được không?'}
          ],
          practice: ['Đọc về 5 khác biệt văn hóa Anh-Mỹ','Tập small talk về thời tiết, thể thao','Thảo luận phong tục Tết Việt Nam bằng tiếng Anh'],
          tip: 'Bệnh nhân quốc tế có nền văn hóa khác nhau — hiểu văn hóa giúp bạn chăm sóc tốt hơn.'
        },
        {
          id: 'd24', icon: '🚨',
          title: 'Tình Huống Khẩn Cấp',
          titleEn: 'Emergency Situations',
          description: 'Gọi cấp cứu, báo cáo sự cố, xin trợ giúp khẩn cấp.',
          duration: '1 tuần', skills: ['speaking','listening','vocabulary'],
          objectives: ['Gọi 911 / số cấp cứu','Mô tả tình huống khẩn cấp','Xin trợ giúp khi gặp nguy hiểm'],
          vocabulary: [
            {en:'Emergency',vi:'Cấp cứu',phonetic:'/ɪˈmɜː.dʒən.si/'},
            {en:'Ambulance',vi:'Xe cấp cứu',phonetic:'/ˈæm.bjə.ləns/'},
            {en:'Fire',vi:'Cháy',phonetic:'/faɪər/'},
            {en:'Accident',vi:'Tai nạn',phonetic:'/ˈæk.sɪ.dənt/'},
            {en:'Help!',vi:'Cứu!',phonetic:'/help/'},
            {en:'Unconscious',vi:'Bất tỉnh',phonetic:'/ʌnˈkɒn.ʃəs/'}
          ],
          phrases: [
            {en:'Please call an ambulance!',vi:'Làm ơn gọi xe cấp cứu!'},
            {en:'There has been an accident.',vi:'Có một vụ tai nạn.'},
            {en:'Someone is unconscious.',vi:'Có người bất tỉnh.'},
            {en:"I need help immediately!",vi:'Tôi cần giúp đỡ ngay lập tức!'}
          ],
          practice: ['Role-play gọi cấp cứu 911','Tập mô tả tai nạn giao thông','Luyện báo cháy bằng tiếng Anh'],
          tip: 'Đây là bài học CỰC KỲ QUAN TRỌNG cho y tá — thuộc lòng các câu cấp cứu!'
        }
      ]
    }
  ]
};
