/*
 * DATA-MEDICAL.JS — Tiếng Anh Chuyên Ngành Y Tế
 * Thêm bài học: copy 1 object vào mảng lessons
 */
const MEDICAL_ENGLISH = {
  title: 'Tiếng Anh Chuyên Ngành Y Tế',
  icon: '🏥', color: 'medical',
  phases: [
    {
      id:'med-p1', name:'Giai đoạn 1: Nền Tảng Y Tế', duration:'Tháng 1–3', icon:'🩺',
      description:'Từ vựng y khoa cơ bản, bộ phận cơ thể, triệu chứng, dụng cụ.',
      lessons: [
        { id:'m1', icon:'🫁', title:'Bộ Phận Cơ Thể Người', titleEn:'Human Body Parts',
          description:'Tên gọi các bộ phận cơ thể bằng tiếng Anh — nền tảng quan trọng nhất.',
          duration:'2 tuần', skills:['vocabulary','listening','speaking'],
          objectives:['Gọi tên 40+ bộ phận cơ thể','Chỉ vào và nói tên bộ phận','Hiểu khi bệnh nhân mô tả vị trí đau'],
          vocabulary:[
            {en:'Head',vi:'Đầu',phonetic:'/hed/'},
            {en:'Chest',vi:'Ngực',phonetic:'/tʃest/'},
            {en:'Abdomen',vi:'Bụng',phonetic:'/ˈæb.də.mən/'},
            {en:'Spine',vi:'Cột sống',phonetic:'/spaɪn/'},
            {en:'Lung',vi:'Phổi',phonetic:'/lʌŋ/'},
            {en:'Heart',vi:'Tim',phonetic:'/hɑːrt/'},
            {en:'Liver',vi:'Gan',phonetic:'/ˈlɪv.ər/'},
            {en:'Kidney',vi:'Thận',phonetic:'/ˈkɪd.ni/'}
          ],
          phrases:[
            {en:'Where does it hurt?',vi:'Đau ở đâu?'},
            {en:'Point to the area that hurts.',vi:'Chỉ vào chỗ đau.'},
            {en:'Does your chest feel tight?',vi:'Ngực bạn có cảm thấy tức không?'},
            {en:'Can you move your arm?',vi:'Bạn cử động tay được không?'}
          ],
          practice:['Dán nhãn tiếng Anh lên sơ đồ cơ thể','Chỉ và nói tên 20 bộ phận mỗi ngày','Tập hỏi bệnh nhân chỗ đau'],
          tip:'Đây là bài học NỀN TẢNG — thuộc lòng tên bộ phận cơ thể trước khi học tiếp!'
        },
        { id:'m2', icon:'🤒', title:'Triệu Chứng Bệnh Thường Gặp', titleEn:'Common Symptoms',
          description:'Từ vựng mô tả triệu chứng: đau, sốt, ho, khó thở, chóng mặt...',
          duration:'2 tuần', skills:['vocabulary','listening','speaking'],
          objectives:['Nhận biết 30+ triệu chứng bằng tiếng Anh','Hiểu bệnh nhân mô tả triệu chứng','Hỏi chi tiết về triệu chứng'],
          vocabulary:[
            {en:'Pain',vi:'Đau',phonetic:'/peɪn/'},
            {en:'Fever',vi:'Sốt',phonetic:'/ˈfiː.vər/'},
            {en:'Nausea',vi:'Buồn nôn',phonetic:'/ˈnɔː.zi.ə/'},
            {en:'Dizziness',vi:'Chóng mặt',phonetic:'/ˈdɪz.i.nəs/'},
            {en:'Shortness of breath',vi:'Khó thở',phonetic:'/ˈʃɔːrt.nəs əv breθ/'},
            {en:'Swelling',vi:'Sưng',phonetic:'/ˈswel.ɪŋ/'}
          ],
          phrases:[
            {en:'When did the pain start?',vi:'Cơn đau bắt đầu khi nào?'},
            {en:'On a scale of 1-10, how bad is the pain?',vi:'Từ 1-10, mức đau bao nhiêu?'},
            {en:'Do you have any other symptoms?',vi:'Bạn có triệu chứng nào khác không?'},
            {en:'Is the pain constant or intermittent?',vi:'Đau liên tục hay từng cơn?'}
          ],
          practice:['Flashcard 30 triệu chứng phổ biến','Role-play hỏi triệu chứng bệnh nhân','Nghe audio bệnh nhân mô tả bệnh'],
          tip:'Câu "On a scale of 1-10" là công cụ đánh giá đau rất phổ biến trong y tế quốc tế.'
        },
        { id:'m3', icon:'💉', title:'Dụng Cụ & Thiết Bị Y Tế', titleEn:'Medical Tools & Equipment',
          description:'Tên các dụng cụ y tế mà y tá sử dụng hàng ngày.',
          duration:'2 tuần', skills:['vocabulary','speaking','listening'],
          objectives:['Gọi tên 25+ dụng cụ y tế','Yêu cầu dụng cụ bằng tiếng Anh','Hướng dẫn bệnh nhân về thiết bị'],
          vocabulary:[
            {en:'Syringe',vi:'Ống tiêm',phonetic:'/sɪˈrɪndʒ/'},
            {en:'Stethoscope',vi:'Ống nghe',phonetic:'/ˈsteθ.ə.skoʊp/'},
            {en:'Thermometer',vi:'Nhiệt kế',phonetic:'/θərˈmɒm.ɪ.tər/'},
            {en:'Blood pressure cuff',vi:'Máy đo huyết áp',phonetic:''},
            {en:'IV drip',vi:'Truyền dịch',phonetic:'/aɪ viː drɪp/'},
            {en:'Bandage',vi:'Băng gạc',phonetic:'/ˈbæn.dɪdʒ/'}
          ],
          phrases:[
            {en:'I need to take your blood pressure.',vi:'Tôi cần đo huyết áp cho bạn.'},
            {en:'Please hand me the thermometer.',vi:'Đưa giúp tôi nhiệt kế.'},
            {en:'I will insert the IV now.',vi:'Bây giờ tôi sẽ truyền dịch.'},
            {en:'This might pinch a little.',vi:'Có thể hơi nhói một chút.'}
          ],
          practice:['Dán nhãn tiếng Anh lên dụng cụ thật','Tập yêu cầu dụng cụ với đồng nghiệp','Hướng dẫn bệnh nhân về máy theo dõi'],
          tip:'Dán sticky note tiếng Anh lên dụng cụ ở nơi làm việc — học nhanh gấp đôi!'
        },
        { id:'m4', icon:'💊', title:'Thuốc & Liều Lượng', titleEn:'Medications & Dosage',
          description:'Tên các loại thuốc phổ biến, cách đọc đơn thuốc và hướng dẫn liều dùng.',
          duration:'2 tuần', skills:['vocabulary','reading','speaking'],
          objectives:['Gọi tên các dạng thuốc','Đọc và giải thích đơn thuốc','Hướng dẫn bệnh nhân uống thuốc'],
          vocabulary:[
            {en:'Tablet / Pill',vi:'Viên thuốc',phonetic:'/ˈtæb.lɪt/'},
            {en:'Capsule',vi:'Viên nang',phonetic:'/ˈkæp.sjuːl/'},
            {en:'Dosage',vi:'Liều lượng',phonetic:'/ˈdoʊ.sɪdʒ/'},
            {en:'Prescription',vi:'Đơn thuốc',phonetic:'/prɪˈskrɪp.ʃən/'},
            {en:'Side effect',vi:'Tác dụng phụ',phonetic:'/saɪd ɪˈfekt/'},
            {en:'Painkiller',vi:'Thuốc giảm đau',phonetic:'/ˈpeɪnˌkɪl.ər/'}
          ],
          phrases:[
            {en:'Take two tablets twice a day.',vi:'Uống 2 viên, ngày 2 lần.'},
            {en:'Take this medicine after meals.',vi:'Uống thuốc này sau bữa ăn.'},
            {en:'Are you allergic to any medications?',vi:'Bạn có dị ứng thuốc nào không?'},
            {en:'Common side effects include...',vi:'Tác dụng phụ thường gặp bao gồm...'}
          ],
          practice:['Đọc 5 nhãn thuốc bằng tiếng Anh','Tập hướng dẫn bệnh nhân uống thuốc','Flashcard các dạng thuốc'],
          tip:'Sai liều thuốc có thể gây nguy hiểm — học kỹ cách đọc liều lượng bằng tiếng Anh!'
        },
        { id:'m5', icon:'🏥', title:'Các Khoa Trong Bệnh Viện', titleEn:'Hospital Departments',
          description:'Tên gọi các khoa, phòng ban và khu vực trong bệnh viện.',
          duration:'1 tuần', skills:['vocabulary','speaking'],
          objectives:['Gọi tên 15+ khoa/phòng','Chỉ đường trong bệnh viện','Chuyển bệnh nhân đúng khoa'],
          vocabulary:[
            {en:'Emergency Room (ER)',vi:'Phòng cấp cứu',phonetic:'/ɪˈmɜː.dʒən.si ruːm/'},
            {en:'ICU (Intensive Care Unit)',vi:'Phòng hồi sức tích cực',phonetic:''},
            {en:'Pediatrics',vi:'Khoa Nhi',phonetic:'/ˌpiː.diˈæt.rɪks/'},
            {en:'Surgery',vi:'Khoa Ngoại / Phẫu thuật',phonetic:'/ˈsɜː.dʒər.i/'},
            {en:'Pharmacy',vi:'Nhà thuốc',phonetic:'/ˈfɑːr.mə.si/'},
            {en:'Laboratory',vi:'Phòng xét nghiệm',phonetic:'/ˈlæb.rə.tɔːr.i/'}
          ],
          phrases:[
            {en:'The pharmacy is on the first floor.',vi:'Nhà thuốc ở tầng 1.'},
            {en:'You need to go to the X-ray department.',vi:'Bạn cần đến phòng chụp X-quang.'},
            {en:'The patient should be transferred to ICU.',vi:'Bệnh nhân cần chuyển đến ICU.'},
            {en:'Which department are you looking for?',vi:'Bạn tìm khoa nào?'}
          ],
          practice:['Vẽ sơ đồ bệnh viện bằng tiếng Anh','Tập chỉ đường đến các khoa','Nghe và hiểu thông báo bệnh viện'],
          tip:'Học tên khoa giúp bạn giao tiếp nhanh hơn khi cần phối hợp giữa các bộ phận.'
        },
        { id:'m6', icon:'👨‍⚕️', title:'Chức Danh & Vai Trò Y Tế', titleEn:'Medical Titles & Roles',
          description:'Các chức danh trong bệnh viện: bác sĩ, y tá, dược sĩ, kỹ thuật viên...',
          duration:'1 tuần', skills:['vocabulary','speaking'],
          objectives:['Gọi tên 15+ chức danh y tế','Giới thiệu vai trò của mình','Biết ai phụ trách gì'],
          vocabulary:[
            {en:'Registered Nurse (RN)',vi:'Y tá chính quy',phonetic:''},
            {en:'Physician / Doctor',vi:'Bác sĩ',phonetic:'/fɪˈzɪʃ.ən/'},
            {en:'Surgeon',vi:'Bác sĩ phẫu thuật',phonetic:'/ˈsɜː.dʒən/'},
            {en:'Pharmacist',vi:'Dược sĩ',phonetic:'/ˈfɑːr.mə.sɪst/'},
            {en:'Paramedic',vi:'Nhân viên cấp cứu',phonetic:'/ˌpær.əˈmed.ɪk/'},
            {en:'Midwife',vi:'Nữ hộ sinh',phonetic:'/ˈmɪd.waɪf/'}
          ],
          phrases:[
            {en:'I am your nurse for today.',vi:'Tôi là y tá phụ trách bạn hôm nay.'},
            {en:'The doctor will see you shortly.',vi:'Bác sĩ sẽ đến khám cho bạn ngay.'},
            {en:'I will inform the surgeon.',vi:'Tôi sẽ thông báo cho bác sĩ phẫu thuật.'},
            {en:'Please ask the pharmacist about your medication.',vi:'Vui lòng hỏi dược sĩ về thuốc.'}
          ],
          practice:['Liệt kê chức danh trong bệnh viện bạn','Tập giới thiệu bản thân là y tá','Role-play giới thiệu đội ngũ y tế'],
          tip:'Biết chức danh giúp bạn giao tiếp chính xác — không gọi nhầm bác sĩ là y tá!'
        },
        { id:'m7', icon:'📊', title:'Chỉ Số Sinh Tồn', titleEn:'Vital Signs',
          description:'Đo và báo cáo: huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Đọc chỉ số sinh tồn bằng tiếng Anh','Báo cáo kết quả cho bác sĩ','Ghi chép chỉ số chính xác'],
          vocabulary:[
            {en:'Blood pressure',vi:'Huyết áp',phonetic:'/blʌd ˈpreʃ.ər/'},
            {en:'Heart rate / Pulse',vi:'Nhịp tim / Mạch',phonetic:'/hɑːrt reɪt/'},
            {en:'Temperature',vi:'Nhiệt độ',phonetic:'/ˈtem.prə.tʃər/'},
            {en:'Respiratory rate',vi:'Nhịp thở',phonetic:'/rɪˈspɪr.ə.tɔːr.i reɪt/'},
            {en:'Oxygen saturation (SpO2)',vi:'Độ bão hòa oxy',phonetic:''},
            {en:'Normal range',vi:'Khoảng bình thường',phonetic:''}
          ],
          phrases:[
            {en:'Your blood pressure is 120 over 80.',vi:'Huyết áp của bạn là 120/80.'},
            {en:'Your temperature is 38.5 degrees.',vi:'Nhiệt độ của bạn là 38.5 độ.'},
            {en:'Heart rate is slightly elevated.',vi:'Nhịp tim hơi cao.'},
            {en:'All vitals are within normal range.',vi:'Tất cả chỉ số đều bình thường.'}
          ],
          practice:['Tập đọc chỉ số của 5 bệnh nhân giả','Báo cáo sinh hiệu bằng tiếng Anh','Nghe bác sĩ hỏi về sinh hiệu và trả lời'],
          tip:'Đọc số liệu chính xác bằng tiếng Anh cực kỳ quan trọng — sai số có thể gây nguy hiểm!'
        },
        { id:'m8', icon:'🧤', title:'Vệ Sinh & An Toàn Y Tế', titleEn:'Hygiene & Safety',
          description:'Quy tắc vệ sinh, kiểm soát nhiễm khuẩn, an toàn trong bệnh viện.',
          duration:'1 tuần', skills:['vocabulary','speaking','reading'],
          objectives:['Dùng từ vựng vệ sinh y tế','Hướng dẫn bệnh nhân rửa tay','Hiểu biển báo an toàn tiếng Anh'],
          vocabulary:[
            {en:'Hand hygiene',vi:'Vệ sinh tay',phonetic:''},
            {en:'Gloves',vi:'Găng tay',phonetic:'/ɡlʌvz/'},
            {en:'Mask',vi:'Khẩu trang',phonetic:'/mæsk/'},
            {en:'Sanitizer',vi:'Dung dịch sát khuẩn',phonetic:'/ˈsæn.ɪ.taɪ.zər/'},
            {en:'Infection control',vi:'Kiểm soát nhiễm khuẩn',phonetic:''},
            {en:'Waste disposal',vi:'Xử lý chất thải',phonetic:''}
          ],
          phrases:[
            {en:'Please wash your hands.',vi:'Vui lòng rửa tay.'},
            {en:'You need to wear a mask.',vi:'Bạn cần đeo khẩu trang.'},
            {en:'I need to put on gloves first.',vi:'Tôi cần đeo găng tay trước.'},
            {en:'This area must be kept sterile.',vi:'Khu vực này phải giữ vô trùng.'}
          ],
          practice:['Đọc poster vệ sinh tay bằng tiếng Anh','Hướng dẫn bệnh nhân quy tắc vệ sinh','Tập giải thích quy trình cách ly'],
          tip:'Trong bệnh viện quốc tế, mọi biển báo đều bằng tiếng Anh — đọc hiểu là bắt buộc.'
        }
      ]
    },
    {
      id:'med-p2', name:'Giai đoạn 2: Giao Tiếp Lâm Sàng', duration:'Tháng 4–6', icon:'💬',
      description:'Giao tiếp trực tiếp với bệnh nhân, bác sĩ và đồng nghiệp trong môi trường lâm sàng.',
      lessons: [
        { id:'m9', icon:'🤝', title:'Tiếp Đón Bệnh Nhân', titleEn:'Patient Reception',
          description:'Chào đón, đăng ký, hướng dẫn bệnh nhân mới nhập viện.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Chào đón bệnh nhân bằng tiếng Anh','Thu thập thông tin cá nhân','Giải thích quy trình nhập viện'],
          vocabulary:[
            {en:'Admission',vi:'Nhập viện',phonetic:'/ədˈmɪʃ.ən/'},
            {en:'Patient ID',vi:'Mã bệnh nhân',phonetic:''},
            {en:'Insurance',vi:'Bảo hiểm',phonetic:'/ɪnˈʃʊr.əns/'},
            {en:'Next of kin',vi:'Người thân liên hệ',phonetic:''},
            {en:'Consent form',vi:'Phiếu đồng ý',phonetic:''},
            {en:'Allergy',vi:'Dị ứng',phonetic:'/ˈæl.ər.dʒi/'}
          ],
          phrases:[
            {en:'Welcome to our hospital. How can I help you?',vi:'Chào mừng đến bệnh viện. Tôi giúp gì được?'},
            {en:'May I have your full name and date of birth?',vi:'Cho tôi xin họ tên và ngày sinh.'},
            {en:'Do you have health insurance?',vi:'Bạn có bảo hiểm y tế không?'},
            {en:'Please sign this consent form.',vi:'Vui lòng ký phiếu đồng ý.'}
          ],
          practice:['Role-play tiếp đón bệnh nhân mới','Tập điền form nhập viện tiếng Anh','Giải thích quy trình cho bệnh nhân'],
          tip:'Ấn tượng đầu tiên rất quan trọng — chào đón ấm áp giúp bệnh nhân yên tâm.'
        },
        { id:'m10', icon:'📋', title:'Hỏi Bệnh Sử', titleEn:'Medical History Taking',
          description:'Khai thác tiền sử bệnh, phẫu thuật, dị ứng, thuốc đang dùng.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Hỏi tiền sử bệnh có hệ thống','Ghi nhận dị ứng và thuốc','Hiểu câu trả lời của bệnh nhân'],
          vocabulary:[
            {en:'Medical history',vi:'Tiền sử bệnh',phonetic:''},
            {en:'Previous surgery',vi:'Phẫu thuật trước đó',phonetic:''},
            {en:'Chronic disease',vi:'Bệnh mạn tính',phonetic:''},
            {en:'Diabetes',vi:'Tiểu đường',phonetic:'/ˌdaɪ.əˈbiː.tiːz/'},
            {en:'Hypertension',vi:'Tăng huyết áp',phonetic:'/ˌhaɪ.pərˈten.ʃən/'},
            {en:'Family history',vi:'Tiền sử gia đình',phonetic:''}
          ],
          phrases:[
            {en:'Do you have any chronic conditions?',vi:'Bạn có mắc bệnh mạn tính nào không?'},
            {en:'Have you had any surgeries before?',vi:'Bạn đã từng phẫu thuật chưa?'},
            {en:'What medications are you currently taking?',vi:'Hiện tại bạn đang uống thuốc gì?'},
            {en:'Is there a history of heart disease in your family?',vi:'Gia đình có ai mắc bệnh tim không?'}
          ],
          practice:['Tập hỏi bệnh sử 10 bệnh nhân giả','Điền form bệnh sử bằng tiếng Anh','Nghe bệnh nhân kể bệnh sử và ghi chép'],
          tip:'Hỏi bệnh sử có hệ thống: bệnh hiện tại → tiền sử → dị ứng → thuốc → gia đình.'
        },
        { id:'m11', icon:'📏', title:'Đo & Báo Cáo Sinh Hiệu', titleEn:'Measuring & Reporting Vitals',
          description:'Thực hành đo sinh hiệu và báo cáo kết quả cho bác sĩ/đồng nghiệp.',
          duration:'1 tuần', skills:['speaking','listening'],
          objectives:['Hướng dẫn bệnh nhân trong quá trình đo','Đọc kết quả chính xác','Báo cáo bất thường cho bác sĩ'],
          vocabulary:[
            {en:'Measure',vi:'Đo',phonetic:'/ˈmeʒ.ər/'},
            {en:'Monitor',vi:'Theo dõi',phonetic:'/ˈmɒn.ɪ.tər/'},
            {en:'Elevated',vi:'Cao hơn bình thường',phonetic:'/ˈel.ɪ.veɪ.tɪd/'},
            {en:'Low / Decreased',vi:'Thấp / Giảm',phonetic:''},
            {en:'Stable',vi:'Ổn định',phonetic:'/ˈsteɪ.bəl/'},
            {en:'Critical',vi:'Nguy kịch',phonetic:'/ˈkrɪt.ɪ.kəl/'}
          ],
          phrases:[
            {en:'I need to check your vitals.',vi:'Tôi cần kiểm tra sinh hiệu.'},
            {en:'Please sit still while I take your blood pressure.',vi:'Ngồi yên trong khi tôi đo huyết áp.'},
            {en:'Doctor, the patient has an elevated temperature.',vi:'Bác sĩ, bệnh nhân bị sốt cao.'},
            {en:'Vitals are stable.',vi:'Sinh hiệu ổn định.'}
          ],
          practice:['Đo sinh hiệu và báo cáo bằng tiếng Anh','Role-play gọi bác sĩ báo bất thường','Tập ghi chú sinh hiệu bằng tiếng Anh'],
          tip:'Khi báo cáo bất thường, nói rõ: CHỈ SỐ + GIÁ TRỊ + MỨC ĐỘ để bác sĩ nắm ngay.'
        },
        { id:'m12', icon:'📝', title:'Hướng Dẫn Trước Thủ Thuật', titleEn:'Pre-Procedure Instructions',
          description:'Giải thích quy trình, chuẩn bị bệnh nhân trước phẫu thuật/thủ thuật.',
          duration:'2 tuần', skills:['speaking','vocabulary','listening'],
          objectives:['Giải thích quy trình cho bệnh nhân','Hướng dẫn chuẩn bị trước thủ thuật','Trả lời câu hỏi lo lắng'],
          vocabulary:[
            {en:'Procedure',vi:'Thủ thuật',phonetic:'/prəˈsiː.dʒər/'},
            {en:'Anesthesia',vi:'Gây mê',phonetic:'/ˌæn.əsˈθiː.zi.ə/'},
            {en:'Fasting',vi:'Nhịn ăn',phonetic:'/ˈfæs.tɪŋ/'},
            {en:'Preparation',vi:'Chuẩn bị',phonetic:'/ˌprep.əˈreɪ.ʃən/'},
            {en:'Recovery',vi:'Hồi phục',phonetic:'/rɪˈkʌv.ər.i/'},
            {en:'Complication',vi:'Biến chứng',phonetic:'/ˌkɒm.plɪˈkeɪ.ʃən/'}
          ],
          phrases:[
            {en:'You must not eat or drink after midnight.',vi:'Bạn không được ăn uống sau nửa đêm.'},
            {en:'The procedure will take about 30 minutes.',vi:'Thủ thuật sẽ mất khoảng 30 phút.'},
            {en:'Do you have any questions about the procedure?',vi:'Bạn có câu hỏi gì về thủ thuật không?'},
            {en:'You will recover within a few days.',vi:'Bạn sẽ hồi phục trong vài ngày.'}
          ],
          practice:['Giải thích 3 thủ thuật phổ biến bằng tiếng Anh','Role-play chuẩn bị bệnh nhân trước mổ','Tập trả lời câu hỏi lo lắng của bệnh nhân'],
          tip:'Giọng nói nhẹ nhàng + giải thích rõ ràng sẽ giúp bệnh nhân bớt sợ.'
        },
        { id:'m13', icon:'🛏️', title:'Chăm Sóc Bệnh Nhân Nội Trú', titleEn:'Inpatient Care',
          description:'Chăm sóc hàng ngày: cho ăn, vệ sinh, thay băng, theo dõi.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Giao tiếp khi chăm sóc hàng ngày','Hướng dẫn bệnh nhân tự chăm sóc','Theo dõi và ghi nhận tình trạng'],
          vocabulary:[
            {en:'Wound care',vi:'Chăm sóc vết thương',phonetic:''},
            {en:'Bed bath',vi:'Tắm tại giường',phonetic:''},
            {en:'Urinary catheter',vi:'Ống thông tiểu',phonetic:''},
            {en:'Wheelchair',vi:'Xe lăn',phonetic:'/ˈwiːl.tʃer/'},
            {en:'Bedsore',vi:'Loét do nằm',phonetic:'/ˈbed.sɔːr/'},
            {en:'Mobility',vi:'Khả năng vận động',phonetic:'/moʊˈbɪl.ə.ti/'}
          ],
          phrases:[
            {en:"It's time to change your bandage.",vi:'Đến giờ thay băng rồi.'},
            {en:'Do you need help getting to the bathroom?',vi:'Bạn cần giúp đi vệ sinh không?'},
            {en:'I will help you sit up.',vi:'Tôi sẽ giúp bạn ngồi dậy.'},
            {en:'Are you in any pain right now?',vi:'Bạn có đang đau không?'}
          ],
          practice:['Tập nói khi thay băng cho bệnh nhân','Role-play giúp bệnh nhân ăn uống','Hướng dẫn bệnh nhân tập đi lại'],
          tip:'Luôn giải thích trước khi chạm vào bệnh nhân: "I am going to..." — đây là quy tắc vàng.'
        },
        { id:'m14', icon:'💉', title:'Quản Lý Thuốc', titleEn:'Medication Management',
          description:'Phát thuốc, kiểm tra 5 đúng, giám sát tác dụng phụ.',
          duration:'1 tuần', skills:['speaking','vocabulary','reading'],
          objectives:['Áp dụng quy tắc 5 đúng bằng tiếng Anh','Giải thích thuốc cho bệnh nhân','Phát hiện và báo cáo tác dụng phụ'],
          vocabulary:[
            {en:'Right patient',vi:'Đúng bệnh nhân',phonetic:''},
            {en:'Right drug',vi:'Đúng thuốc',phonetic:''},
            {en:'Right dose',vi:'Đúng liều',phonetic:''},
            {en:'Right route',vi:'Đúng đường dùng',phonetic:''},
            {en:'Right time',vi:'Đúng thời gian',phonetic:''},
            {en:'Adverse reaction',vi:'Phản ứng bất lợi',phonetic:''}
          ],
          phrases:[
            {en:'Can you confirm your name and date of birth?',vi:'Xác nhận tên và ngày sinh của bạn?'},
            {en:'This is your morning medication.',vi:'Đây là thuốc buổi sáng của bạn.'},
            {en:'If you feel dizzy, press the call button.',vi:'Nếu thấy chóng mặt, bấm chuông gọi.'},
            {en:'Have you experienced any side effects?',vi:'Bạn có gặp tác dụng phụ nào không?'}
          ],
          practice:['Tập quy trình 5 đúng bằng tiếng Anh','Role-play phát thuốc cho bệnh nhân','Giải thích tác dụng phụ phổ biến'],
          tip:'5 Rights (5 đúng) là quy tắc an toàn thuốc quốc tế — thuộc lòng bằng tiếng Anh!'
        },
        { id:'m15', icon:'🗣️', title:'Giao Tiếp Với Bác Sĩ', titleEn:'Communicating with Doctors',
          description:'Báo cáo tình trạng bệnh nhân theo mô hình SBAR, nhận y lệnh.',
          duration:'2 tuần', skills:['speaking','listening'],
          objectives:['Báo cáo theo mô hình SBAR','Nhận và xác nhận y lệnh','Trao đổi chuyên môn với bác sĩ'],
          vocabulary:[
            {en:'SBAR (Situation-Background-Assessment-Recommendation)',vi:'Mô hình báo cáo SBAR',phonetic:''},
            {en:'Order',vi:'Y lệnh',phonetic:'/ˈɔːr.dər/'},
            {en:'Update',vi:'Cập nhật',phonetic:'/ʌpˈdeɪt/'},
            {en:'Deteriorate',vi:'Xấu đi',phonetic:'/dɪˈtɪr.i.ə.reɪt/'},
            {en:'Improve',vi:'Cải thiện',phonetic:'/ɪmˈpruːv/'},
            {en:'Confirm',vi:'Xác nhận',phonetic:'/kənˈfɜːrm/'}
          ],
          phrases:[
            {en:'Doctor, I am calling about patient in Room 302.',vi:'Bác sĩ, tôi gọi về bệnh nhân phòng 302.'},
            {en:"The patient's condition has deteriorated.",vi:'Tình trạng bệnh nhân xấu đi.'},
            {en:'I recommend we increase the dosage.',vi:'Tôi đề xuất tăng liều.'},
            {en:'Can you please confirm the order?',vi:'Bác sĩ xác nhận y lệnh được không?'}
          ],
          practice:['Tập báo cáo SBAR 5 ca bệnh','Role-play gọi bác sĩ lúc nửa đêm','Nhận y lệnh và đọc lại xác nhận'],
          tip:'SBAR là chuẩn quốc tế: Situation → Background → Assessment → Recommendation.'
        },
        { id:'m16', icon:'📄', title:'Ghi Chép Hồ Sơ Y Tế', titleEn:'Medical Record Documentation',
          description:'Đọc và viết ghi chú y tế, hiểu các viết tắt y khoa phổ biến.',
          duration:'1 tuần', skills:['reading','vocabulary','speaking'],
          objectives:['Đọc hiểu ghi chú y tế tiếng Anh','Viết ghi chú ngắn gọn, chính xác','Hiểu 30+ viết tắt y khoa'],
          vocabulary:[
            {en:'PRN (as needed)',vi:'Khi cần',phonetic:''},
            {en:'BID (twice daily)',vi:'Ngày 2 lần',phonetic:''},
            {en:'NPO (nothing by mouth)',vi:'Nhịn ăn uống',phonetic:''},
            {en:'TID (three times daily)',vi:'Ngày 3 lần',phonetic:''},
            {en:'Stat (immediately)',vi:'Ngay lập tức',phonetic:''},
            {en:'WNL (within normal limits)',vi:'Trong giới hạn bình thường',phonetic:''}
          ],
          phrases:[
            {en:'Patient alert and oriented.',vi:'Bệnh nhân tỉnh táo và định hướng tốt.'},
            {en:'Wound clean and dry, no signs of infection.',vi:'Vết thương sạch, khô, không dấu hiệu nhiễm trùng.'},
            {en:'Administered medication as prescribed.',vi:'Đã cho thuốc theo y lệnh.'},
            {en:'Will continue to monitor.',vi:'Sẽ tiếp tục theo dõi.'}
          ],
          practice:['Đọc 5 ghi chú y tế mẫu','Viết ghi chú cho ca giả','Học thuộc 30 từ viết tắt y khoa'],
          tip:'Ghi chú y tế phải ngắn gọn, chính xác — không dùng từ mơ hồ!'
        }
      ]
    },
    {
      id:'med-p3', name:'Giai đoạn 3: Chuyên Sâu & Nâng Cao', duration:'Tháng 7–9', icon:'🎯',
      description:'Xử lý tình huống phức tạp, giao tiếp đa văn hóa, và phát triển chuyên nghiệp.',
      lessons: [
        { id:'m17', icon:'🚑', title:'Xử Lý Tình Huống Khẩn Cấp', titleEn:'Emergency Response',
          description:'Giao tiếp nhanh, chính xác trong tình huống cấp cứu y tế.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Phản ứng nhanh bằng tiếng Anh','Gọi Code Blue/Red','Phối hợp với đội cấp cứu'],
          vocabulary:[
            {en:'Code Blue',vi:'Ngừng tim/phổi',phonetic:''},
            {en:'CPR',vi:'Hồi sinh tim phổi',phonetic:''},
            {en:'Defibrillator',vi:'Máy sốc điện',phonetic:'/dɪˈfɪb.rɪ.leɪ.tər/'},
            {en:'Cardiac arrest',vi:'Ngừng tim',phonetic:''},
            {en:'Hemorrhage',vi:'Xuất huyết',phonetic:'/ˈhem.ər.ɪdʒ/'},
            {en:'Resuscitate',vi:'Hồi sức',phonetic:'/rɪˈsʌs.ɪ.teɪt/'}
          ],
          phrases:[
            {en:'Code Blue, Room 205! I need help immediately!',vi:'Code Blue, phòng 205! Cần hỗ trợ ngay!'},
            {en:'Start chest compressions!',vi:'Bắt đầu ép ngực!'},
            {en:'Get the defibrillator!',vi:'Lấy máy sốc điện!'},
            {en:'The patient is unresponsive.',vi:'Bệnh nhân không phản hồi.'}
          ],
          practice:['Diễn tập Code Blue bằng tiếng Anh','Role-play CPR và giao tiếp đội nhóm','Tập gọi hỗ trợ khẩn cấp'],
          tip:'Trong cấp cứu, NÓI TO và RÕ RÀNG — không có thời gian để do dự!'
        },
        { id:'m18', icon:'💚', title:'Tư Vấn Sức Khỏe', titleEn:'Health Counseling',
          description:'Tư vấn bệnh nhân về lối sống, dinh dưỡng, phòng bệnh.',
          duration:'1 tuần', skills:['speaking','vocabulary'],
          objectives:['Tư vấn chế độ ăn uống','Hướng dẫn tập thể dục phù hợp','Khuyến khích thay đổi lối sống'],
          vocabulary:[
            {en:'Diet',vi:'Chế độ ăn',phonetic:'/daɪ.ət/'},
            {en:'Nutrition',vi:'Dinh dưỡng',phonetic:'/njuːˈtrɪʃ.ən/'},
            {en:'Exercise regularly',vi:'Tập thể dục đều đặn',phonetic:''},
            {en:'Quit smoking',vi:'Bỏ hút thuốc',phonetic:''},
            {en:'Stress management',vi:'Quản lý stress',phonetic:''},
            {en:'Follow-up',vi:'Tái khám',phonetic:'/ˈfɒl.oʊ ʌp/'}
          ],
          phrases:[
            {en:'You should reduce your salt intake.',vi:'Bạn nên giảm ăn mặn.'},
            {en:'Try to exercise at least 30 minutes a day.',vi:'Cố gắng tập 30 phút mỗi ngày.'},
            {en:'It is very important to take your medication regularly.',vi:'Uống thuốc đều rất quan trọng.'},
            {en:'Please come back for a follow-up in 2 weeks.',vi:'Vui lòng quay lại tái khám sau 2 tuần.'}
          ],
          practice:['Tư vấn bệnh nhân tiểu đường','Hướng dẫn bệnh nhân huyết áp cao','Role-play tư vấn dinh dưỡng'],
          tip:'Dùng ngôn ngữ đơn giản khi tư vấn — bệnh nhân cần HIỂU, không cần thuật ngữ phức tạp.'
        },
        { id:'m19', icon:'👶', title:'Chăm Sóc Đặc Biệt', titleEn:'Special Patient Care',
          description:'Giao tiếp với trẻ em, người già, bệnh nhân khuyết tật.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Giao tiếp phù hợp với trẻ em','Chăm sóc người cao tuổi','Hỗ trợ bệnh nhân đặc biệt'],
          vocabulary:[
            {en:'Pediatric patient',vi:'Bệnh nhi',phonetic:''},
            {en:'Elderly',vi:'Người cao tuổi',phonetic:'/ˈel.dər.li/'},
            {en:'Disability',vi:'Khuyết tật',phonetic:'/ˌdɪs.əˈbɪl.ə.ti/'},
            {en:'Hearing impaired',vi:'Khiếm thính',phonetic:''},
            {en:'Gentle',vi:'Nhẹ nhàng',phonetic:'/ˈdʒen.təl/'},
            {en:'Comfort',vi:'An ủi/Thoải mái',phonetic:'/ˈkʌm.fərt/'}
          ],
          phrases:[
            {en:"Don't be scared, sweetie. This won't hurt.",vi:'Đừng sợ nhé con. Cái này không đau đâu.'},
            {en:'Can you hear me clearly?',vi:'Bạn nghe rõ tôi không?'},
            {en:'I will speak slowly for you.',vi:'Tôi sẽ nói chậm cho bạn.'},
            {en:'Would you like me to call your family?',vi:'Bạn muốn tôi gọi gia đình không?'}
          ],
          practice:['Role-play chăm sóc bệnh nhi','Tập giao tiếp với người cao tuổi','Thực hành hỗ trợ bệnh nhân khiếm thính'],
          tip:'Mỗi nhóm bệnh nhân cần cách giao tiếp khác nhau — sự nhạy cảm là chìa khóa.'
        },
        { id:'m20', icon:'🌐', title:'Giao Tiếp Đa Văn Hóa', titleEn:'Cross-Cultural Communication',
          description:'Giao tiếp với bệnh nhân từ nhiều quốc gia, tôn trọng đa dạng văn hóa.',
          duration:'1 tuần', skills:['speaking','listening','vocabulary'],
          objectives:['Hiểu khác biệt văn hóa trong y tế','Tôn trọng tín ngưỡng bệnh nhân','Tránh hiểu lầm văn hóa'],
          vocabulary:[
            {en:'Cultural sensitivity',vi:'Nhạy cảm văn hóa',phonetic:''},
            {en:'Religious belief',vi:'Tín ngưỡng tôn giáo',phonetic:''},
            {en:'Interpreter',vi:'Phiên dịch',phonetic:'/ɪnˈtɜː.prə.tər/'},
            {en:'Dietary restriction',vi:'Kiêng ăn',phonetic:''},
            {en:'Modesty',vi:'Sự kín đáo',phonetic:'/ˈmɒd.ɪ.sti/'},
            {en:'Spiritual care',vi:'Chăm sóc tâm linh',phonetic:''}
          ],
          phrases:[
            {en:'Do you have any dietary restrictions?',vi:'Bạn có kiêng ăn gì không?'},
            {en:'Would you like us to arrange an interpreter?',vi:'Bạn có cần phiên dịch không?'},
            {en:'We respect your religious beliefs.',vi:'Chúng tôi tôn trọng tín ngưỡng của bạn.'},
            {en:'Please let us know if you have any special needs.',vi:'Xin cho biết nếu có yêu cầu đặc biệt.'}
          ],
          practice:['Tìm hiểu 5 nền văn hóa khác nhau','Role-play với bệnh nhân Hồi giáo','Thảo luận cách tôn trọng đa văn hóa'],
          tip:'Không phán xét — hỏi "Is there anything I should know?" để hiểu nhu cầu văn hóa.'
        },
        { id:'m21', icon:'🔄', title:'Bàn Giao Ca Trực', titleEn:'Shift Handover',
          description:'Bàn giao thông tin bệnh nhân chính xác khi đổi ca.',
          duration:'1 tuần', skills:['speaking','listening'],
          objectives:['Bàn giao đầy đủ thông tin','Nhận ca và xác nhận thông tin','Sử dụng checklist bàn giao'],
          vocabulary:[
            {en:'Handover / Handoff',vi:'Bàn giao',phonetic:'/ˈhænd.oʊ.vər/'},
            {en:'Shift',vi:'Ca trực',phonetic:'/ʃɪft/'},
            {en:'Pending',vi:'Đang chờ',phonetic:'/ˈpen.dɪŋ/'},
            {en:'Priority',vi:'Ưu tiên',phonetic:'/praɪˈɒr.ə.ti/'},
            {en:'Follow up on',vi:'Theo dõi tiếp',phonetic:''},
            {en:'Incident',vi:'Sự cố',phonetic:'/ˈɪn.sɪ.dənt/'}
          ],
          phrases:[
            {en:'Patient in Room 301 is post-op, vitals stable.',vi:'Bệnh nhân phòng 301 sau mổ, sinh hiệu ổn.'},
            {en:'The IV needs to be changed at 10 PM.',vi:'Cần thay dịch truyền lúc 10 giờ tối.'},
            {en:'There is a pending lab result for Room 205.',vi:'Phòng 205 đang chờ kết quả xét nghiệm.'},
            {en:'Any questions about the handover?',vi:'Có câu hỏi gì về bàn giao không?'}
          ],
          practice:['Viết bàn giao 5 bệnh nhân bằng tiếng Anh','Role-play bàn giao ca','Tập nhận ca và hỏi lại thông tin'],
          tip:'Bàn giao tốt = bệnh nhân an toàn. Luôn kiểm tra lại thông tin quan trọng!'
        },
        { id:'m22', icon:'⚖️', title:'Đạo Đức & Quyền Bệnh Nhân', titleEn:'Ethics & Patient Rights',
          description:'Hiểu quyền bệnh nhân, bảo mật thông tin, đạo đức nghề nghiệp.',
          duration:'1 tuần', skills:['vocabulary','reading','speaking'],
          objectives:['Giải thích quyền bệnh nhân','Bảo mật thông tin y tế','Xử lý tình huống đạo đức'],
          vocabulary:[
            {en:'Patient rights',vi:'Quyền bệnh nhân',phonetic:''},
            {en:'Confidentiality',vi:'Bảo mật',phonetic:'/ˌkɒn.fɪˌden.ʃiˈæl.ə.ti/'},
            {en:'Informed consent',vi:'Đồng ý có hiểu biết',phonetic:''},
            {en:'Privacy',vi:'Quyền riêng tư',phonetic:'/ˈpraɪ.və.si/'},
            {en:'Dignity',vi:'Phẩm giá',phonetic:'/ˈdɪɡ.nə.ti/'},
            {en:'Advocate',vi:'Bảo vệ quyền lợi',phonetic:'/ˈæd.və.keɪt/'}
          ],
          phrases:[
            {en:'You have the right to refuse treatment.',vi:'Bạn có quyền từ chối điều trị.'},
            {en:'Your medical information is confidential.',vi:'Thông tin y tế của bạn được bảo mật.'},
            {en:'Do you understand and agree to this procedure?',vi:'Bạn hiểu và đồng ý thủ thuật này chứ?'},
            {en:'We will treat you with dignity and respect.',vi:'Chúng tôi sẽ đối xử tôn trọng với bạn.'}
          ],
          practice:['Đọc bảng quyền bệnh nhân tiếng Anh','Role-play giải thích quyền từ chối','Thảo luận case study đạo đức'],
          tip:'Y tá là người BẢO VỆ quyền bệnh nhân — hiểu quyền để bảo vệ đúng cách.'
        },
        { id:'m23', icon:'🎓', title:'Hội Nghị & Đào Tạo', titleEn:'Conferences & Continuing Education',
          description:'Tham gia hội nghị y khoa, đào tạo liên tục bằng tiếng Anh.',
          duration:'1 tuần', skills:['listening','speaking','reading'],
          objectives:['Nghe hiểu bài giảng y khoa','Đặt câu hỏi tại hội nghị','Đọc tài liệu đào tạo'],
          vocabulary:[
            {en:'Conference',vi:'Hội nghị',phonetic:'/ˈkɒn.fər.əns/'},
            {en:'Presentation',vi:'Bài thuyết trình',phonetic:'/ˌprez.ənˈteɪ.ʃən/'},
            {en:'Research',vi:'Nghiên cứu',phonetic:'/rɪˈsɜːrtʃ/'},
            {en:'Evidence-based',vi:'Dựa trên bằng chứng',phonetic:''},
            {en:'Workshop',vi:'Hội thảo thực hành',phonetic:'/ˈwɜːrk.ʃɒp/'},
            {en:'Certificate',vi:'Chứng chỉ',phonetic:'/sərˈtɪf.ɪ.kət/'}
          ],
          phrases:[
            {en:'I have a question about the presentation.',vi:'Tôi có câu hỏi về bài thuyết trình.'},
            {en:'Could you explain that in more detail?',vi:'Bạn giải thích chi tiết hơn được không?'},
            {en:'This research shows that...',vi:'Nghiên cứu này cho thấy rằng...'},
            {en:'I would like to register for the workshop.',vi:'Tôi muốn đăng ký hội thảo.'}
          ],
          practice:['Xem 3 bài giảng y khoa tiếng Anh trên YouTube','Tập đặt câu hỏi bằng tiếng Anh','Đọc 1 bài báo y khoa đơn giản'],
          tip:'YouTube, Coursera, Khan Academy có nhiều video y khoa miễn phí — tận dụng!'
        },
        { id:'m24', icon:'🏆', title:'Tổng Ôn & Đánh Giá', titleEn:'Comprehensive Review',
          description:'Ôn tập toàn bộ, đánh giá trình độ, và lập kế hoạch học tiếp.',
          duration:'2 tuần', skills:['speaking','listening','vocabulary','reading'],
          objectives:['Ôn tập 200+ từ vựng y tế','Thi thử giao tiếp','Lập kế hoạch học tiếp tục'],
          vocabulary:[
            {en:'Assessment',vi:'Đánh giá',phonetic:'/əˈses.mənt/'},
            {en:'Proficiency',vi:'Trình độ thành thạo',phonetic:'/prəˈfɪʃ.ən.si/'},
            {en:'Improvement',vi:'Sự tiến bộ',phonetic:'/ɪmˈpruːv.mənt/'},
            {en:'Goal',vi:'Mục tiêu',phonetic:'/ɡoʊl/'},
            {en:'Fluency',vi:'Sự trôi chảy',phonetic:'/ˈfluː.ən.si/'},
            {en:'Milestone',vi:'Cột mốc',phonetic:'/ˈmaɪl.stoʊn/'}
          ],
          phrases:[
            {en:'I have improved significantly over 9 months.',vi:'Tôi đã tiến bộ rất nhiều trong 9 tháng.'},
            {en:'My goal is to achieve conversational fluency.',vi:'Mục tiêu là giao tiếp trôi chảy.'},
            {en:'I need to continue practicing every day.',vi:'Tôi cần tiếp tục luyện tập mỗi ngày.'},
            {en:'Thank you for your support during my training.',vi:'Cảm ơn sự hỗ trợ trong quá trình học.'}
          ],
          practice:['Thi thử 20 câu giao tiếp y tế','Ôn 200 từ vựng quan trọng nhất','Tự đánh giá và lập kế hoạch tiếp'],
          tip:'Hoàn thành lộ trình không phải kết thúc — là khởi đầu của hành trình giao tiếp tự tin!'
        }
      ]
    }
  ]
};
