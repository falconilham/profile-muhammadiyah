import React, {Component} from 'react';
import {Platform, TouchableOpacity, StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableHighlight, Image} from 'react-native';
import {WebView} from 'react-native-webview';
export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      active: 'Home',
      disabled: true,
      login: "",
      web: require('./sejarah.html'),
      current_tokoh: Math.floor(Math.random()* 3),
      username: "",
      data: "",
      visi: "   Muhammadiyah sebagai gerakan Islam yang berlandaskan Al-Qur’an dan As-Sunnah dengan watak tajdid yang dimilikinya senantiasa istiqomah dan aktif dalam melaksanakan dakwah Islam amar ma’ruf nahi munkar di semua bidang dalam upaya mewujudkan Islam sebagai rahmatan lil’alamin menuju terciptanya/terwujudnya masyarakat Islam yang sebenar-benarnya.",
      misi: 
        {
          judul:"   Muhammadiyah sebagai gerakan Islam, dakwah amar ma’ruf nahi munkar memiliki misi :",
          list:[
            "Menegakkan keyakinan tauhid yang murni sesuai dengan ajaran Allah SWT yang dibawa oleh para Rasul sejak Nabi Adam as. hingga Nabi Muhammad saw.",
            "Memahami agama dengan menggunakan akal fikiran sesuai dengan jiwa ajaran Islam untuk menjawab dan menyelesaikan persoalan-persoalan kehidupan.",
            "Menyebar luaskan ajaran Islam yang bersumber pada Al-Qur’an sebagai kitab Allah terakhir dan Sunnah Rasul untuk pedoman hidup umat manusia.",
            "Mewujudkan amalan-amalan Islam dalam kehidupan pribadi, keluarga dan masyarakat."
          ]
        },
      tokoh: [
        {
          nama: "KH. Ahmad Dahlan",
          image: require('./image/tokoh/KHAhmadDahlan.jpg'),
          deskripsi: "KH. Ahmad Dahlan: Lahir 1 Agustus 1868 Yogyakarta Meninggal 23 Februari 1923 Yogyakarta Dikenal karena Pendiri Muhammadiyah dan Pahlawan Nasional Agama Islam Pasangan Hj. Siti Walidah Nyai Abdullah Nyai Rum Nyai Aisyah Nyai Yasin Anak Djohanah Siradj Dahlan Siti Busyro Irfan Dahlan Siti Aisyah Siti Zaharah Dandanah Kyai Haji Ahmad Dahlan (lahir di Yogyakarta 1 Agustus 1868 – meninggal di Yogyakarta 23 Februari 1923 pada umur 54 tahun) adalah seorang Pahlawan Nasional Indonesia. Pada umur 15 tahun, ia pergi haji dan tinggal di Mekah selama lima tahun. Pada periode ini, Ahmad Dahlan mulai berinteraksi dengan pemikiran-pemikiran pembaharu dalam Islam, seperti Muhammad Abduh, Al-Afghani, Rasyid Ridha dan Ibnu Taimiyah Ketika pulang kembali ke kampungnya tahun 1888, ia berganti nama menjadi Ahmad Dahlan. Pada tahun 1903, ia bertolak kembali ke Mekah dan menetap selama dua tahun. Pada masa ini, ia sempat berguru kepada Syeh Ahmad Khatib yang juga guru dari pendiri NU, KH. Hasyim Asyari. Pada tahun 1912, ia mendirikan Muhammadiyah di kampung Kauman Yogyakarta Disamping aktif dalam menggulirkan gagasannya tentang gerakan dakwah Muhammadiyah, ia juga dikenal sebagai seorang wirausahawan yang cukup berhasil dengan berdagang batik yang saat itu merupakan profesi wiraswasta yang cukup menggejala di masyarakat sebagai seorang yang aktif dalam kegiatan bermasyarakat dan mempunyai gagasan-gagasan cemerlang, Dahlan juga dengan mudah diterima dan dihormati di tengah kalangan masyarakat, sehingga ia juga dengan cepat mendapatkan tempat di organisasi Jam'iyatul Khair, Budi Utomo, Syarikat Islam dan Comite Pembela Kanjeng Nabi Muhammad SAW. Pada tahun 1912, Ahmad Dahlan pun mendirikan organisasi Muhammadiyah untuk melaksanakan cita-cita pembaruan Islam di bumi Nusantara. Ahmad Dahlan ingin mengadakan suatu pembaruan dalam cara berpikir dan beramal menurut tuntunan agama Islam, la ingin mengajak umat Islam Indonesia untuk kembali hidup menurut tuntunan al-Qur'an dan al-Hadits. Perkumpulan ini berdiri bertepatan pada tanggal 18 Nopember 1912, berbagai fitnahan, tuduhan dan hasutan datang bertubi-tubi kepadanya. la dituduh hendak mendirikan agama baru yang menyalahi agama Islam. Ada yang menuduhnya kyai palsu karena sudah meniru-niru bangsa Belanda yang Kristen mengajar di sekolah Belanda serta bergaul dengan tokoh-tokoh Budi Utomo yang kebanyakan dari golongan priyayi, dan bermacam-macam tuduhan lain. Saat itu Ahmad Dahlan sempat mengajar agama Islam di sekolah OSVIA Magelang yang merupakan sekolah khusus Belanda untuk anak-anak priyayi, Bahkan ada pula orang yang hendak membunuhnya. Namun ia berteguh hati untuk melanjutkan cita-cita dan perjuangan pembaruan Islam di tanah air bisa mengatasi semua rintangan tersebut Pada tanggal 20 Desember 1912, Ahmad Dahlan mengajukan permohonan kepada Pemerintah Hindia Belanda untuk mendapatkan badan hukum. Permohonan itu baru dikabulkan pada tahun 1914, dengan Surat Ketetapan Pemerintah No. 81 tanggal 22 Agustus 1914. Izin itu hanya berlaku untuk daerah Yogyakarta dan organisasi ini hanya boleh bergerak di daerah Yogyakarta.Berbagai fitnahan, tuduhan dan hasutan datang bertubi-tubi kepadanya. la dituduh hendak mendirikan agama baru yang menyalahi agama Islam. Ada yang menuduhnya kyai palsu, karena sudah meniru-niru bangsa Belanda yang Kristen, mengajar di sekolah Belanda, serta bergaul dengan tokoh-tokoh Budi Utomo yang kebanyakan dari golongan priyayi, dan bermacam-macam tuduhan lain. Saat itu Ahmad Dahlan sempat mengajar agama Islam di sekolah OSVIA Magelang, yang merupakan sekolah khusus Belanda untuk anak-anak priyayi. Bahkan ada pula orang yang hendak membunuhnya, Namun ia berteguh hati untuk melanjutkan cita-cita dan perjuangan pembaruan Islam di tanah air bisa mengatasi semua rintangan tersebut. Pada tanggal 20 Desember 1912, Ahmad Dahlan mengajukan permohonan kepada Pemerintah Hindia Belanda untuk mendapatkan badan hukum, permohonan itu baru dikabulkan pada tahun 1914, dengan Surat ketetapan Pemerintah No. 81 tanggal 22 Agustus 1914. Izin itu hanya berlaku untuk daerah Yogyakarta dan organisasi ini hanya boleh bergerak di daerah Yogyakarta. Untuk mengatasinya, maka KH. Ahmad Dahlan menyiasatinya dengan menganjurkan agar cabang Muhammadiyah di luar Yogyakarta memakai nama lain. Misalnya Nurul Islam di Pekalongan, Al-Munir di Ujung Pandang, Ahmadiyah[4] di Garut. Sedangkan di Solo berdiri perkumpulan Sidiq Amanah Tabligh Fathonah (SATF) yang mendapat pimpinan dari cabang Muhammadiyah. Bahkan dalam kota Yogyakarta sendiri ia menganjurkan adanya jama'ah dan perkumpulan untuk mengadakan pengajian dan menjalankan kepentingan Islam. Muhammadiyah makin lama makin berkembang hampir di seluruh Indonesia. Oleh karena itu, pada tanggal 7 Mei 1921 Dahlan mengajukan permohonan kepada pemerintah Hindia Belanda untuk mendirikan cabang-cabang Muhammadiyah di seluruh Indonesia, permohonan ini dikabulkan oleh pemerintah Hindia Belanda pada tanggal 2 September 1921. Sebagai seorang yang demokratis dalam melaksanakan aktivitas gerakan dakwah Muhammadiyah, Dahlan juga memfasilitasi para anggota Muhammadiyah untuk proses evaluasi kerja dan pemilihan pemimpin dalam Muhammadiyah. Atas jasa-jasa KH. Ahmad Dahlan dalam membangkitkan kesadaran bangsa Indonesia melalui pembaharuan Islam dan pendidikan, maka Pemerintah Republik Indonesia menetapkannya sebagai Pahlawan Nasional dengan surat Keputusan Presiden no. 657 tahun 1961. Dasar-dasar penetapan itu ialah sebagai berikut:",
          list: [
            "1. KH. Ahmad Dahlan telah mempelopori kebangkitan ummat Islam untuk menyadari nasibnya sebagai bangsa terjajah yang masih harus belajar dan berbuat.",
            "2. Dengan organisasi Muhammadiyah yang didirikannya, telah banyak memberikan ajaran Islam yang murni kepada bangsanya. Ajaran yang menuntut kemajuan, kecerdasan, dan beramal bagi masyarakat dan umat, dengan dasar iman dan Islam.",
            "3. Dengan organisasinya, Muhammadiyah telah mempelopori amal usaha sosial dan pendidikan yang amat diperlukan bagi kebangkitan dan kemajuan bangsa, dengan jiwa ajaran Islam.",
            "4. Dengan organisasinya, Muhammadiyah bagian wanita (Aisyiyah) telah mempelopori kebangkitan wanita Indonesia untuk mengecap pendidikan dan berfungsi sosial, setingkat dengan kaum pria",
            "Artikel utama: Sang Pencerah kisah hidup dan perjuangan Ahmad Dahlan mendirikan Muhammadyah diangkat ke layar lebar dengan judul Sang Pencerah. Tidak hanya menceritakan tentang sejarah kisah Ahmad Dahlan, film ini juga bercerita tentang perjuangan dan semangat patriotisme anak muda dalam merepresentasikan pemikiran-pemikirannya yang dianggap bertentangan dengan pemahaman agama dan budaya pada masa itu, dengan latar belakang suasana Kebangkitan Nasional. "
          ],
          other_deskripsi: "Kisah hidup dan perjuangan Ahmad Dahlan mendirikan Muhammadyah diangkat ke layar lebar dengan judul Sang Pencerah. Tidak hanya menceritakan tentang sejarah kisah Ahmad Dahlan, film ini juga bercerita tentang perjuangan dan semangat patriotisme anak muda dalam merepresentasikan pemikiran-pemikirannya yang dianggap bertentangan dengan pemahaman agama dan budaya pada masa itu, dengan latar belakang suasana Kebangkitan Nasional. ",   
          quotes:[
            "Jangan suka menempatkan seseorang pada posisinya, tapi tempatkanlah diri saudara terlebih dahulu pada posisi yang benar",
            "Kebenaran suatu hal tidaklah ditentukan oleh banyaknya orang yang mempercayainya"
          ]
        },
        {
          nama: "IBRAHIM HOSEN",
          image: require('./image/tokoh/IbrahimHosen.jpg'),
          deskripsi: "IBRAHIM HOSEN: Ibrahim Hosen lahir dikota Bengkulu, Sumatera pada tanggal 1 Januari 1916. Beliau adalah keturunan para Sultan dan Ulama Bugis yang berada di Sulawesi Selatan. Ayahnya adalah KH Husen bin Abdusy Syakur ulama besar kota Bengkulu, Ibunya adalah Zawiyah dari keturunan kerajaan Bengkulu. Dari latar belakang yang sudah diketahui, jelaslah bahwa beliau menurunkan dua sifat penting yaitu kepemimpinan dan kafasihan dalam ilmu agama, beliau merupakan salah satu ulama besar yang menerangi Indonesia bagaikan sinar rembulan yang terang benderang dimuka bumi ini. Sewaktu ayahnya pindah ke Singapura beliau memulai sekolahnya di sekolah As-Saqqaf, Singapura kemudian melanjutkan ke jenjang yang lebih tinggi di pelbagai pesantren di Jawa. Di antaranya Banten yang kala itu di pimpin oleh KH. Tubagus Shaleh Ma’mun, seorang Qari’ ternama dan ahli agama. Kemudian beliau melanjutkan ke Cirebon Timur dan berguru kepada KH Abbas, salah satu murid KH Hasyim Asy‘ari di Jombang (Pendiri Nahdlatul Ulama). Kemudian beliau berpindah dan melanjutkan ke Solo berguru kepada Ust Husain As-Saqqaf mempelajari bahasa Arab dan Fiqih. Setelah menamatkan sekolahnya di berbagai pesantren di jawa, beliau melanjutkan ke Universitas al-Azhar – Kairo, Mesir jurusan Syari’ah dan meraih gelar S1 pada tahun 1960. Sewaktu beliau di Mesir beliau menggunakan kesempatan itu untuk berguru dan menggali ilmu agama sedalam-dalamnya, maka beliau berguru Nahwu-Sharaf kepada Prof. Dr Ahmad Kuhel dan berguru Ilmu Balaghah kepada Prof. Dr. Hassan Gad. Dan mendalami ilmu Ushul Fiqih kepada Prof.Dr. Abu Anwar Zuhair semoga Allah merahmati mereka semua. Diantara kasus-kasus yang berhasil beliau istinbathkan [mengeluarkan fatwa hukumnya] ialah:",
          list: [
            "1.Pemerintah adalah pandangan Islami",
            "2. Wanita boleh /mubah menjadi pemimpin [presiden]",
            "3.Seorang dokter mubah melihat aurat besar [kemaluan] pasiennya untuk kepentingan Pemeriksaan dan pemasangan alat KB",
            "4. Penentuan Hilal ‘Ied fitri dan ‘Idul adhha merupakan wewenang pemerintah [ulul amri] dan bukan merupakan wewenang suatu lembaga atau golongan Islam tertentu. Karena dalam penentuan tersebut pemerintah yang berkewajiban untuk menentukan dan masyarakat Islam wajib mengikuti ketentuan pemerintah dalam hal ini. Disamping itu, hal demikian menutup pintu perpecahan dan perselisihan antara golongan-golongan Islam.",
            "5.Wanita boleh menjadi Jaksa",
            "6. Tayamum boleh dilakukan dengan apapun yang thahir di muka bumi ini, karena kata “Sha’idan” yaitu segala sesuatu yang muncul dari muka bumi.",
            "7. Wanita sah menjadi imam shalat yang berma’mumkan laki-laki, sebagaimana diriwayatkan oleh Abu daud di sunannya bahwa Ummu waraqah mengimami shalat dan ma’mumnya ketika itu adalah anak laki-laki kecil dan pamannya.",
            "8. Laba Bank adalah haram karena merupakan riba yang diharamkan Allah SWT.",
            "9. Pembaharuan dalam pengertian judi. Judi haram bukan karena zatnya [judinya itu sendiri] akan tetapi karena madharat dan efek buruknya.",
            "10. Minuman yang dijadikan bahan dasar khamer dan bukan berasal dari anggur maka bila diminum tidak melebihi batasan yang memabukkan halal.",
            "11. Khamer yang berbahan dasar anggur, alcohol dan itanol, sebenarnya adalah bahan yang suci dan bukanlah bahan yang najis, oleh karena itu boleh seseorang menggunakan wewangian yang mengandung alcohol ketika shalat. Hal demikian sesuai dengan pendapat Abu Hanifah akan tetapi bertentangan sengan pendapat Imam Syafi’i.",
          ],
          other_deskripsi: "Selama hidupnya beliau dikenal sebagai sosok pembaharu dan pemikir ulung, bersama KH Ahmad Dahlan, beliau membuka Perguruan Tingg Ilmu Al-Qur’an [khusus laki-laki] dan membangun bersama KH Sulaiman Affan Institut Ilmu Al-Qur’an [Khusus wanita] yang kemudian dikembangkan dan dilestarikan kemurniannya oleh ibu Herwini Yusuf. Beliau wafat pada 7 November 2001, semoga allah SWT merahmati dan meridhoi beliau Amiin. (zar/ diterjemahkan oleh Amirah).",
          quotes: ""
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/KHHasyimAshari.jpg'),
          deskripsi: "KH. HASYIM ASYARI: KH. Hasyim Asyari, lahir pada tanggal 14 Februari 1871 bertepatan dengan tanggal 24 Dzulqadah 1287 H, di desa Gedang, 2 km sebelah utara kota Jombang Jawa Timur, nama kecilnya adalah Muhammad Hasyim.Silsilah KH. Hasyim Asyari berasal dari keturunan nigrat dan ulama. Garis keturunan ini bila ditelusuri sebagai berikut : Muhammad Hasyim bin Halimah binti Layyinah binti Soihah bin Abdul Jabar bin Ahmad bin Pangeran Sambo bin Pangeran Benowo bin Joko Tingkir (Mas Kerebet) bin Prabu Brawijaya. Sedangkan dari garis bapak, sampai pada keluarga Ahlu Syaiban yang berasal dari keturunan para bangsawan Arab yang datang ke Indonesia pada abad ke-4 H untuk menyebarkan Islam ke Asia Selatan dan mendirikan pusat dakwah Islam dan kesultanan-kesultanan Ahlu Adhamah Khan. Mereka adalah keturunan Imam Jafar Shodiq bin Imam Muhammad Baqir (Chairul Anam, 1985 : 56-57 ; Muhammad Asad Syihab, 1994 : 27). KH. Hasyim Asyari, selain sebagai ulama besar juga pahlawan bangsa. Semangat kepahlawanannya tidak pernah surut, bahkan beberapa kali beliau memberikan nasehat kepada Bung Tomo dan Panglima Besar Soedirman yang datang ke Tebuireng, melaporkan tentang perkembangan agresi militer Belanda yang saat itu sudah memasuki Singosari Malang.Latar Belakang Pendidikan dan Profesi Sejak kanak-kanak, Hasyim dikenal sangat cerdas dan rajin belajar. Ia mula-mula belajar agama dengan ayahnya, yaitu belajar ilmu tauhid, fiqih, tafsir dan bahasa Arab. Karena kecerdasannya, maka dalam usia 13 tahun, Hasyim sudah membantu ayahnya mengajar para santri yang lebih senior. Rasa dahaga akan ilmu pengetahuan, membuat Hasyim menjadi seorang pengelana ilmu, karena itulah selama dua tahun ia belajar dari pondok ke pondok pesantren lainnya. Setelah menikah Kiyayi Yakub mengajak Hasyim dan istrinya pergi haji ke Mekkah. Setelah menunaikan ibadah haji, Kyai Yakub memerintahkan anak dan mantunya agar tetap bermukim di Mekkah untuk menuntut ilmu. Ada anggapan saat itu, bahwa seorang ulama, siapapun juga jika belum belajar di Mekkah selama bertahun-tahun, belum dianggap cukup ilmunya. Karena itulah Hasyim mulai belajar menekuni ilmu fiqih mazhab Syafi’i dan ilmu hadits kitab Bukhari Muslim, dibawah bimbingan guru-guru terkenal, seperti Syeikh Ahmad Khatib Minangkabau, Syeikh Nawawi al Bantani dan Syeikh Mahfudz Termas. Sebagaimana pandangan gurunya, KH. Hasyim Asyari secara tegas mempertahankan ajaran-ajaran mazhab dan memandang penting praktik-praktik tharekat. Muhammad Hasyim juga menerima pikiran modernis dari Muhammad Abduh guna membangkitkan kembali semangat Islam. Namun ia kurang sependapat dengan Muhammad Abduh soal “melepaskan keterikatan” dengan mazhab dalam memahami Islam. Begitu juga dengan praktik-praktik keagamaan ia tidak menganggapnya sebagai bentuk kesalahan dan menyimpang dari ajaran Islam seperti anggapan Muhammad Abduh. Dalam Konteks inilah, Chairul Anam (1985:60-61) menilai KH. Hasyim Asyari berbeda dengan Muhammad Abduh. Menurut KH. Hasyim Asyari, penguasaan mazhab adalah suatu yang prinsipil, guna memahami maksud sebenarnya dari Al-Qur’an dan hadits. Tanpa mempelajari pendapat ulama besar, khususnya Imam Empat yaitu ; Imam Syafi’i, Imam Maliki, Imam Hanafi dan Imam Hambali, hanya akan melahirkan pemutarbalikan pengertian dari ajaran Islam itu sendiri.Chairul Anam dengan penilaian itu mencoba menegaskan keteguhan pendirian KH. Hasyim Asyari, yang kemudian menjadi landasan sikap tradisi pemahaman keagamaan NU, pernah juga disampaikan KH. Hasyim Asyari di hadapan para ulama peserta Muktamar NU ke-3 September 1982 yang dikenal dengan “Muqaddimah Qanun Asasi” Nahdlatul Ulama (pembukaan Anggaran Dasar Nahdlatul Ulama). ketika itu Kyai Hasyim Asyari berkata: “Hai Para ulama dan pemimpin yang takut kepada Allah, kalian sudah menuntut ilmu agama dari orang-orang yang hidup sebelum kalian dan begitu pula generasi sebelumnya dengan bersambung sampai pada kalian, dan kalian harus melihat dari sikap kalian mencari ilmu atau menuntut ilmu agama. Berhubungan dengan cara menuntut ilmu pengetahuan demikian itu, maka kalian menjadi pemegang kuncinya, bahkan menjadi pintu-pintu gerbangnya ilmu pengetahuan agama. Oleh karena itu janganlah memasuki suatu rumah kecuali melalui pintunya. Siapa saja yang memasuki rumah tidak melalui pintunya maka “pencurilah” namanya.”Semangat pembaruan itu terkesan tidak sejalan dengan semangat perlunya bermazhab yang kemudian dikembangkan oleh KH. Hasyim Asyari setelah pulang ke Tanah Air. Karena itu ketika kembali dari Mekkah, Kyai Hasyim melalui pesantren Tebuireng dan Jami’iyyah Nahdlatul Ulama berusaha untuk terus mengembangkan paham Islam ala “Ahlussunnah waljamaah”, yang mengakui mazhab empat (Imam Syafi’i, Imam Hanafi, Imam Hambali, Imam Maliki). Dalam konteks itulah, maka Muhammadiyah menyatakan kehadiran NU adalah sebagai reaksi terhadap berdirinya gerakan Islam reformasi di Indonesia (Musthofa Kamal Pasha dkk :1976: 23), yang diperjuangkan oleh Jamaluddin al Afghani, Muhammad Abduh dan Rashid Ridha. Adanya perbedaah pemahaman keislaman antara kaum modernis dan tradisionalis sebenarnya sisi lain dari paradigma pemahaman Islam saja. Kalangan Islam modernis seperti Muhammadiyah memahami Islam dari atas mulai dari Al-Qur’an, Hadits, ijmak, Qiyas dan seterusnya. Sedangkan kalangan Islam tradisonalis NU sebaliknya, dari bawah, yaitu mulai dari kitab fiqih/kitab kuning, qiyas, ijma, hadits dan Al-Qur’an. Karena perbedaan cara pandang tersebut kaum modernis lebih leluasa dalam melakukan ijtihad dari ajaran pokoknya yang memiliki kebenaran mutlak (Al-Qur’an) sedangkan kelompok tradisionalis agak kesulitan terutama dalam merespons paham pembaruan yang digagas oleh Jamaluddin Al-Afghani, pada awal abad ke-20, karena sumber prioritas ajaran yang digunakan bukan pokok (cabang), melainkan hasil ijtihad juga. Selama ini kaum ulama tradisional terkesan menjadikan soal furu’ sebagai ajaran pokok yang mutlak kebenarannya. Sementara Harus Nasution (1979 : 113) memandang bahwa ajaran cabang yang merupakan turunan (tafsir) dari ajaran pokok (Al-Qur’an) tidak memiliki sifat kebenaran mutlak, artinya bisa benar bisa juga salah. Karena pemikiran-pemikiran itu hasil akal para mujtahid yang tidak bersifat maksum itak dapat berbuat salah), sehingga interpretasi ulama tidak memiliki “sifat mutlak”.Demikian pula tahun 1990 di Jombang, ulama NU menandaskan pentingnya bermazhab secara metodologis (manhaji) disamping mengikuti produk atau penetapan hukum yang telah ditentukan oleh imam mujtahid mutlak (Mazhab empat). Maksud dari mazhab secara manhaj yaitu mengikuti yaitu mengikuti jalan pikiran dan kaidah penetapan hukum yang telah disusun oleh imam mazhab, dengan kata lain mengikuti metodologi pemikiran tradisional yang telah baku (ushulul fiqh).  Melalui cara pendekatan tersebut NU mampu merespon pembaruan Islam “dari dakwah” yaitu fiqih sosial yang orientasinya mengacu pada peningkatan peran sosial politik ulama. Paradigma fiqih sosial ini didasarkan kepada:",
          list: [
            "1. selalu diupayakan reinterpretasi terhadap teks-teks fiqih untuk mencari konteksnya yang baru.",
            "2. makna bermazhab berubah dari bermazhab secara tekstual (qauli) kepada bermazhab secara metodologis (manhaj).",
            "3. melakukan verifikasi mendasar terhadap ajaran yang pokok (ushul) dan cabang (furu’).",
            "4. fiqih dihadirkan sebagai etika sosial bukan sebagai hukum positif negara.",
            "5. mengenalkan metodologi pemikiran filosofis terutama dalam masalah budaya dan sosial. Butir-butir pemikiran tersebut telah dibahas dalam Munas alim ulama NU, tahun 1992.",
          ],
          other_deskripsi: "Dalam praktiknya tradisi kajian-kajian keislaman tentang fiqih bahtsul masail telah dilakukan NU sejak berdirinya tahun 1926 sampai sekarang. Melalui media tersebut, Kyai Hasyim merambah jalan untuk mengembangkan masyarakat dengan merintis “kelas musyawarah” sebagai kegiatan rutin bagi santri senior di Tebuireng, kemudian diteruskan oleh Kyai Wahab Hasbullah yang membuka forum diskusi dan kursus masalah keagamaan, sehingga melahirkan forum bahtsul masail.",
          quotes:[
            "Jangan jadikan perbedaan pendapat sebagai sebab perpecahan dan permusuhan, karena yang demikian itu merupakan kejahatan besar yang bisa menuntut bangunan masyarakat, dan menutup pintu kebaikan di penjuru mana saja",
          ] 
          },
        {
          nama: "AHMAD RASYID SUTAN MANSYUR",
          image: require('./image/tokoh/AhmadRasyidSutanMansur.jpg'),
          deskripsi: "AHMAD RASYID SUTAN MANSYUR: Ranah Minang pernah melahirkan salah seorang tokoh besar Muhammadiyah, yaitu Ahmad Rasyid Sutan Mansur. Ia lahir di Maninjau, Sumatera Barat pada Ahad malam Senin 26 Jumadil Akhir 1313 Hijriyah yang bertepatan dengan 15 Desember 1895 Masehi. Ia anak ketiga dari tujuh bersaudara yang merupakan karunia Allah pada kedua orang tuanya, yaitu Abdul Somad al-Kusaij, seorang ulama terkenal di Maninjau, dan ibunya Siti Abbasiyah atau dikenal dengan sebutan Uncu Lampur. Keduanya adalah tokoh dan guru agama di kampung Air Angat Maninjau. Ahmad Rasyid memperoleh pendidikan dan penanaman nilai-nilai dasar keagamaan dari kedua orang tuanya. Di samping itu untuk pendidikan umum ia masuk sekolah Inlandshe School (IS) di tempat yang sama (1902-1909). Sikap anti penjajah telah dimilikinya semenjak masih belia. Baginya, penjajahan tidak saja sangat bertentangan dengan fitrah manusia akan tetapi bahkan seringkali berupaya menghadang dan mempersempit gerak syiar agama Islam secara langsung dan terang-terangan atau sacara tidak langsung dan tersembunyi seperti dengan membantu pihak-pihak Zending dan Missi Kristen dalam penyebarluasan agamanya.  pada tahun 1928 ia berada di barisan depan dalam menentang upaya pemerintah Belanda menjalankan peraturan Guru Ordonansi yaitu guru-guru agama Islam dilarang mengajar sebelum mendapat surat izin mengajar dari Pemerintah Belanda. Sikap yang sama juga ia perlihatkan ketika Jepang berikhtiar agar murid-murid tidak berpuasa dan bermaksud menghalangi pelaksanaan shalat dengan mengadakan pertemuan di waktu menjelang Maghrib.Selanjutnya, atas saran gurunya, Tuan Ismail (Dr. Abu Hanifah) ia belajar kepada Haji Rasul, Dr. Abdul Karim Amrullah, seorang tokoh pembaharu Islam di Minangkabau. Di bawah bimbingan Haji Rasul (1910-1917) ia belajar tauhid, bahasa Arab, Ilmu Kalam, Mantiq, Tarikh, dan ilmu-ilmu keislaman lainnya seperti syariat, tasawuf, Al-Qur’an, tafsir, dan hadits dengan mustolah-nya. Pada tahun 1917 ia diambil menantu oleh gurunya, Dr. Karim Amrullah, dan dikawinkan dengan putri sulungnya, Fatimah, kakak Buya HAMKA serta diberi gelar Sutan Mansur. Setahun kemudian ia dikirim gurunya ke Kuala Simpang Aceh untuk mengajar. Setelah dua tahun di Kuala Simpang (1918-1919), ia kembali ke Maninjau. Kegelisahan pikirannya yang selalu menginginkan perubahan dan pembaharuan ajaran Islam menemukan pilihan aktivitasnya, ketika ia berinteraksi dengan Ahmad Dahlan yang sering datang ke Pekalongan untuk bertabligh. Dari interaksi itu, akhirnya ia tertarik untuk bergabung dengan Persyarikatan Muhammadiyah (1922), dan mendirikan Perkumpulan Nurul Islam bersama para pedagang dari Sungai Batang Maninjau yang telah masuk Muhammadiyah di Pekalongan. Pada tahun 1923, ia menjadi Ketua Muhammadiyah Cabang Pekalongan, setelah ketua pertamanya mengundurkan diri karena tidak tahan menerima serangan kanan-kiri dari pihak-pihak yang tidak suka dengan keberadaan Muhammadiyah. Ia juga memimpin Muhammadiyah cabang Pekajangan, Kedung Wuni di samping tetap aktif mengadakan tabligh dan menjadi guru agama.  Kepemimpinan dan cara berdakwah yang dilakukannya tidak frontal dan akomodatif terhadap para pemangku adat dan tokoh setempat, sehingga Muhammadiyah pun dapat diterima dengan baik dan mengalami perkembangan pesat, Pada tahun 1927 bersama Fakhruddin, ia melakukan tabligh dan mengembangkan Muhammadiyah di Medan dan Aceh. . Melalui kebijaksanaannya dan kepiawaiannya dengan cara mendekati raja-raja yang berpengaruh di daerah setempat atau bahkan dengan menjadi montir, Muhammadiyah dapat didirikan di Kotaraja, Sigli, dan Lhokseumawe. Pada tahun 1929, ia pun berhasil mendirikan cabang-cabang Muhammadiyah di Banjarmasin, Kuala Kapuas, Mendawai, dan Amuntai. Dengan demikian, antara tahun 1926-1929 tersebut, Muhammadiyah mulai dikenal luas di luar pulau Jawa.Selain dalam Muhammadiyah, Sutan Mansur–sebagaimana Ahmad Dahlan–pada dasawarsa 1920-an hingga 1930-an aktif dalam Syarikat Islam dan sangat dekat dengan HOS. Tjokroaminoto dan H. Agus Salim Keluarnya ia dari Syarikat Islam dapat dipastikan karena ia lebih memilih Muhammadiyah setelah SI mengambil tindakan disiplin organisasi bagi anggota Muhammadiyah.Kongres Muhammadiyah ke-19 di Minangkabau (14-26 Maret 1930) memutuskan bahwa di setiap karesidenan harus ada wakil Hoofdbestuur Muhammadiyah yang dinamakan Konsul Muhammadiyah.  pada tahun 1931 Sutan Mansur dikukuhkan sebagai Konsul Muhammadiyah (sekarang : Ketua Pimpinan Wilayah Muhammadiyah) daerah Minangkabau (Sumatera Barat) yang meliputi Tapanuli dan Riau yang dijabatnya hingga tahun 1944. Di sini dididik dan digembleng kader Muhammadiyah dan kader Islam yang menyebarluaskan Muhammadiyah dan ajaran Islam di Minangkabau dan daerah-daerah sekitar. Kelak muballigh-muballigh ini akan memainkan peran penting bersama-sama pemimpin dari Yogyakarta dalam menggerakkan roda persyarikatan Muhammadiyah. Ia oleh Konsul-konsul daerah lain di Sumatera dijuluki Imam Muhammadiyah Sumatera. pada tahun 1938, Sutan Mansur menjadi penasehat agama Islam bagi Bung Karno. Pada masa pendudukan Jepang, ia diangkat oleh pemerintah Jepang menjadi salah seorang anggota Tsuo Sangi Kai dan Tsuo Sangi In (semacam DPR dan DPRD) mewakili Sumatera Barat. Setelah itu, sejak tahun 1947 sampai 1949 oleh wakil Presiden Mohammad Hatta, ia diangkat menjadi Imam atau Guru Agama Islam buat Tentara Nasional Indonesia Komandemen Sumatera, berkedudukan di Bukit tinggi, dengan pangkat Mayor Jenderal Tituler.Setelah pengakuan kedaulatan tahun 1950, ia diminta menjadi Penasehat TNI Angkatan Darat, berkantor di Markas Besar Angkatan Darat (MBAD). Akan tetapi, permintaan itu ia tolak karena ia harus berkeliling ke semua daerah di Sumatera, bertabligh sebagai pemuka Muhammadiyah. Pada tahun 1952, Presiden Soekarno memintanya lagi menjadi penasehat Presiden dengan syarat harus memboyong keluarganya dari Bukit tinggi ke Jakarta permintaan itu lagi-lagi ditolaknya Dalam konggres Masyumi tahun 1952, ia diangkat menjadi Wakil Ketua Syura Masyumi Pusat. Setelah pemilihan umum 1955, ia terpilih sebagai anggota Komite Nasional Indonesia Pusat (KNIP) dan anggota Konstituante dari Masyumi sejak Konstituante berdiri sampai dibubarkannya oleh presiden Soekarno. Tahun 1958 ketika pecah pemberontakan PRRI (Pemerintah Revolusioner Republik Indonesia) di Padang, ia pun berada di tengah-tengah mereka karena didasari oleh ketidaksukaannya pada PKI dan kediktatoran Bung Karno, meskipun peran yang dimainkannya dalam pergolakan itu diakuinya sendiri tidak terlalu besar. Pada kongres berikutnya yaitu kongres Muhammadiyah ke-33 tahun 1956 di Palembang ia terpilih lagi menjadi ketua PB Muhammadiyah periode tahun 1956-1959. Dalam masa kepemimpinannya, upaya pemulihan roh Muhammadiyah di kalangan warga dan pimpinan Muhammadiyah digiatkan. Untuk itu ia memasyarakatkan dua hal, pertama merebut khasyyah (takut pada kemurkaan Allah), merebut waktu, memenuhi janji, menanam roh tauhid, dan mewujudkan akhlak tauhid; kedua, mengusahakan buq’ah mubarokah (tempat yang diberkati) di tempat masing-masing, mengupayakan shalat jamaah pada awal setiap waktu, mendidik anak-anak beribadah dan mengaji al-Qur’an, mengaji al-Qur’an untuk mengharap rahmat, melatih puasa sunat hari senin dan kamis, juga pada tanggal 13 ,14, dan 15 bulan Islam seperti yang dipesankan oleh Nabi Muhammad, dan tetap menghidupkan taqwa. Dalam periode kepemimpinannya, Muhammadiyah berhasil merumuskan khittahnya tahun 1956-1959 atau yang populer dengan Khittah Palembang, yaitu :",
          list: [
            "1. Menjiwai pribadi anggota dan pimpinan Muhammadiyah dengan memperdalam dan mepertebal tauhid, menyempurnakan ibadah dengan khusyu’ dan tawadlu’, mempertinggi akhlak, memperluas ilmu pengetahuan, dan menggerakkan Muhammadiyah dengan penuh keyakinan dan rasa tanggung jawab.",
            "2. Melaksanakan uswatun hasanah.",
            "3. Mengutuhkan organisasi dan merapikan administrasi.",
            "4. Memperbanyak dan mempertinggi mutu anak.",
            "5. Mempertinggi mutu anggota dan membentuk kader.",
            "6. Memperoleh ukhuwah sesama muslim dengan mengadakan badan islah untuk mengantisipasi bila terjadi keretakan dan perselisihan, dan",
            "7. Menuntun penghidupan anggota.",
          ],
          other_deskripsi: "Dari beberapa tulisannya yang antara lain berjudul Jihad seruan kepada Kehidupan Baru; Tauhid Membentuk Kepribadian Muslim; dan Ruh Islam nampak sekali bahwa ia ingin mencari Islam yang paling lurus yang tercakup dalam paham yang murni dalam Islam. Buya H. Ahmad Rasyid Sutan Mansur akhirnya meninggal pada hari Senin tanggal 25 Maret 1985 yang bertepatan 3 Rajab 1405 di Rumah Sakit Islam Jakarta dalam usia 90 tahun.  Jenazah almarhum buya dikebumikan di Pekuburan Umum Tanah Kusir, Jakarta Selatan setelah dishalatkan di masjid Kompleks Muhammadiyah. Buya Hamka menyebutnya sebagai ideolog Muhammadiyah dan M. Yunus Anis dalam salah satu kongres Muhammadiyah mengatakan, bahwa di Muhammadiyah ada dua bintang. Bintang Timur adalah KH. Mas Mansur dari Surabaya, ketua PP Muhammadiyah 1937-1943 dan bintang Barat adalah AR. Sutan mansur dari Minangkabau, ketua PP Muhammadiyah 1953-1959.",
          quotes: ""
        },
        {
          nama: "KIAI HAJI FAQIH USMAN",
          image: require('./image/tokoh/KyaiHajiFaqihUsman.jpg'),
          deskripsi: "KIAI HAJI FAQIH USMAN: Kiai Haji Faqih Usman dilahirkan di Gresik Jawa Timur tanggal 2 Maret 1904. Ia berasal dari keluarga santri sederhana dan taat beribadah. Ia merupakan anak keempat dalam keluarga yanga gemar akan ilmu pengetahuan, baik pengetahuan agama maupun pengetahuan umum. Masa kecilnya dilalui dengan belajar membaca al-Quran dan ilmu pengetahuan umum dari ayahnya sendiri. Menginjak usia remaja ia belajar di pondok pesantren di Gresik yang ditempuhnya antara tahun 1914-l918. Antara tahun 1918-1924 dia menimba ilmu pengetahuan di pondok pesantren di luar daerah Gresik.  Dengan demikian, ia juga banyak menguasai buku-buku yang diajarkan di pesantren-pesantren tradisional, karena penguasaannya dalam bahasa Arab,Keterlibatannya dalam Muhammadiyah dimulai pada tahun 1925, ketika ia diangkat sebagai Ketua Group Muhammadiyah Gresik yang dalam perkembangan selanjutnya menjadi salah satu cabang Muhammadiyah di Wilayah Jawa Timur. Selanjutnya karena kepiawaiannya sebagai ulama-cendekiawan, ia diangkat sebagai Ketua Majelis Tarjih Muhammadiyah Jawa Timur periode 1932-1936 yang berkedudukan di Surabaya. Ketika Mas Mansur dikukuhkan sebagai Ketua Pengurus Besar Muhammadiyah, ia menggantikan kedudukan Mas Mansur sebagai Konsul Muhammadiyah Jawa Timur menggantikan Mas Mansur pada tahun 1936. Pada tahun 1953, untuk pertama kalinya dia diangkat dan duduk dalam susunan kepengurusan Pimpinan Pusat Muhammadiyah dan seterusnya selalu terpilih sebagai salah seorang staf ketua Pimpinan Pusat Muhammadiyah,  Menjelang meninggalnya, ia dikukuhkan sebagai Ketua Umum Pimpinan Pusat Muhammadiyah pada Muktamar Muhammadiyah ke-37 tahun 1968 di Yogyakarta untuk periode 1968-1971. Dia pernah memimpin majalah Bintang Islam sebagai media cetak Muhammadiyah wilayah Jawa Timur. Kegiatannya dalam Muhammadiyah memperluas jaringan pergaulannya, sehingga iapun terlibat aktif di berbagai organisasi masyarakat, seperti Majelis Islam A'la Indonesia (MIAI) pada tahun 1937. Pada tahun 1940-1942, dia menjadi anggota Dewan Kota Surabaya. Pada tahun 1945 dia menjadi anggota Komite Nasional Pusat dan Ketua Komite Nasional Surabaya. Pada tahun 1959, dia menerbitkan majalah Panji Masyarakat (Panjimas) bersama-sama dengan Hamka, Joesoef Abdullah Poear, dan Joesoef Ahmad. Dia juga ikut andil dalam pendirian Partai Masyumi sejak didirikannya pada tanggal 7 Nopember 1945 dalam Muktamar Ummat Islam di Yogyakarta. Dia duduk sebagai salah seorang Pengurus Besar Masyumi, dan pada tahun 1952 duduk sebagai Ketua II sampai dengan tahun 1960, yaitu pada saat Masyumi dibubarkan.  Dia pernah dipercaya Pemerintah RI untuk memimpin Departemen Agama pada masa Kabinet Halim Perdanakusumah sejak tanggal 21 Januari 1950 sampai dengan tanggal 6 September 1950, dan pada tahun 1951 ia ditunjuk sebagai Kepala Jawatan Agama Pusat. Situasi politik di tanah air yang tidak stabil saat itu menyebabkan susunan kabinet pun jatuh bangun. Ia dipercaya kembali sebagai Menteri Agama pada masa kabinet Wilopo sejak tanggal 3 April l952 sampai tanggal 1 Agustus 1953. Selepas dari jabatan Menteri Agama RI, ia masih tetap duduk sebagai anggota aktif Konstituate, di samping jabatannya sebagai pegawai tinggi yang diperbantukan pada Departeman Agama sejak tahun l954. Sebagai salah seorang tokoh Masyumi, dia juga terlibat aktif dalam resolusi konflik politik dalam negeri. Sebagai salah seorang Wakil Ketua Pimpinan Pusat Muhammadiyah pada periode kepengurusan Badawi yang pertama, yakni antara tahun 1962-l965, ia merumuskan seuah konsep pemikiran yang kemudian dikenal dengan Kepribadian Muhammadiyah. Rumusan pemikirannya ini diajukan dalam Muktamar Muhammadiyah ke-35 tahun 1962 di Jakarta, dan akhirnya diterima sebagai pedoman bagi warga Muhammadiyah. Setelah tampuk Pimpinan yang di pegang oleh KH Faqih Usman berakhir Ia di gantikan oleh Ki Bagus Hadikusumo yang dilahirkan di kampung Kauman Yogyakarta dengan nama R. Hidayat pada 11 Rabi’ul Akhir 1038 Hijriyah.  Ia merupakan pemimpin Muhammadiyah yang besar andilnya dalam penyusunan Muqadimah UUD 1945, karena ia termasuk dalam anggota Panitia Persiapan Kemerdekan Indonesia (PPKI). Ki Bagus Hadikusumo sangat besar peranannya dalam perumusan Muqadimah UUD 1945 dengan memberikan landasan ketuhanan, kemanusiaan, keberadaban, dan keadilan. Pokok-pokok pikirannya dengan memberikan landasan-landasan itu dalam Muqaddimah UUD 1945 itu disetujui oleh semua anggota PPKI.",
          list:"",
          quotes: ""
        },
        {
          nama: "KI BAGUS HADIKUSUMO",
          image: require('./image/tokoh/KiBagusHadikusumo.jpg'),
          deskripsi: "KI BAGUS HADIKUSUMO: Hal yang paling dikenal dari Ki Bagus Hadikusumo adalah kegigihannya dalam menerapkan Islam dalam segala lini kehidupan. Masih terngiang ucapan Kasman Singodimejo dalam sebuah perbincangan bahwa beliau merasa turut bersalah karena dengan bahasa Jawa yang halus Beliau menyampaikan kepada Ki Bagus Hadikusumo, untuk sementara menerima usulan dihapusnya 7 kata-dengan kewajiban menjalankan syari’at Islam bagi pemeluk-pemeluknya- itu. Dalam pandangan Ki Bagus hanya Islam-lah agama tauhid, Dalam biografinya Teuku Moh. Hasan pun menulis tentang makna Yang Maha Esa ini sebagai Tauhid.  Ki Bagus pernah menjadi Ketua Majelis Tabligh (1922), Ketua Majelis Tarjih, anggota Komisi MPM Hoofdbestuur Muhammadijah (1926), dan Ketua PP Muhammadiyah (1942-1953). Pokok-pokok pikiran Ahmad Dahlan berhasil ia rumuskan sedemikian rupa sehingga dapat menjiwai dan mengarahkan gerak langkah serta perjuangan Muhammadiyah. Bahkan, pokok-pokok pikiran itu menjadi Muqadimah Anggaran Dasar Muhammadiyah.  Muqaddimah yang merupakan dasar ideologi Muhammadiyah ini menginspirasi sejumlah tokoh Muhammadiyah lainnya. HAMKA, misalnya, mendapatkan inspirasi dari muqaddimah tersebut untuk merumuskan dua landasan idiil Muhammadiyah, yaitu Matan Kepribadian Muhammadiyah dan Matan Keyakinan dan Cita-cita Hidup Muhammadiyah. Ki Bagus juga sangat produktif untuk menuliskan buah pikirannya. Buku karyanya antara lain ialah Islam Sebagai Dasar Negara dan Achlaq Pemimpin. Karya-karyanya yang lain yaitu Risalah Katresnan Djati (1935), Poestaka Hadi (1936), Poestaka Islam (1940), Poestaka Ichsan (1941), dan Poestaka Iman (1954). Dari buku-buku karyanya tersebut tercermin komitmennya terhadap etika dan bahkan juga syariat Islam, Ki Bagus adalah termasuk seorang tokoh yang memiliki kecenderungan kuat untuk menginstutisionalisasikan Islam. Bagi Ki Bagus pelembagaan Islam menjadi sangat penting untuk alasan-alasan ideologi, politis, dan juga intelektual, Munculnya Ki Bagus Hadikusumo sebagai Ketua Pengurus Besar Muhammadiyah adalah pada saat terjadi pergolakan politik internasional, yaitu pecahnya perang dunia II. Kendatipun Ki Bagus Hadikusumo menyatakan ketidaksediaannya sebagai Wakil Ketua Pengurus Besar Muhammadiyah ketika diminta oleh Mas Mansur pada kongres ke-26 tahun 1937 di Yogyakarta, ia tetap tidak bisa mengelak memenuhi panggilan tugas untuk menjadi Ketua Pengurus Besar Muhammadiyah ketika Mas mansur dipaksa menjadi anggota pengurus Pusat Tenaga Rakyat (PUTERA) di Jakarta pada tahun 1942. Ia menjadi Ketua Pengurus Besar Muhammadiyah selama 11 tahun (1942-1953) dan wafat pada usia 64 tahun. Pemerintah Republik Indonesia menetapkannya sebagai Pahlawan Perintis Kemerdekaan Nasional Indonesia, Sebelum Muhammadiyah Cabang Surabaya didirikan, KH. Ahmad Dahlan sudah sering melakukan tabligh ke daerah ini. Tabligh-tabligh itu dilaksanakan berupa pengajian yang diselenggarakan di Peneleh Surabaya. Dalam pengajian-pengajian itulah Bung Karno dan Roeslan Abdul Gani untuk pertama kalinya mendengarkan penjelasan tentang ajaran Islam dari KH. Ahmad Dahlan. Setiap melaksanakan tabligh di Surabaya, KH. Ahmad Dahlan biasanya bermalam di penginapan. Akan tetapi suatu malam ia didatangi oleh seorang tamu yang memintanya agar setiap KH. Ahmad Dahlan ke Surabaya bersedia untuk menginap di rumahnya. Tamu itu ialah Kiai Haji Mas Mansur. Mas Mansur selalu mengikuti pengajian yang diberikan oleh KH. Ahmad Dahlan, dan ia sangat tertarik oleh isi kajian yang diberikannya, serta tertarik juga akan kesederhanaannya.",
          list:"",
          quotes: ""
        },
        {
          nama: "MAS MANSUR",
          image: require('./image/tokoh/MasMansur.jpg'),
          deskripsi:"MAS MANSUR: Mas Mansur lahir pada hari Kamis tanggal 25 Juni 1896 Masehi di Surabaya. Ibunya bernama Raudhah, seorang wanita kaya yang berasal dari keluarga Pesantren Sidoresmo Wonokromo Surabaya. Masa kecilnya dilalui dengan belajar agama pada ayahnya sendiri. Di samping itu, dia juga belajar di Pesantren Sidoresmo, dengan Kiai Muhammad Thaha sebagai gurunya. Pada tahun 1906, ketika Mas Mansur berusia sepuluh tahun, dia dikirim oleh ayahnya ke Pondok Pesantren Demangan, Bangkalan, Madura. Di sana, dia mengkaji al-Qur`an dan mendalami kitab Alfiyah ibn Malik kepada Kiai Khalil. Belum lama dia belajar di sana kurang lebih dua tahun, Kia Khalil meninggal dunia, sehingga Mas Mansur meninggalkan pesantren itu dan pulang ke Surabaya. Langkah awal Mas Mansur sepulang dari belajar di luar negeri ialah bergabung dalam Syarikat Islam. Peristiwa yang dia saksikan dan alami baik di Makkah, yaitu terjadinya pergolakan politik, maupun di Mesir, yaitu munculnya gerakan nasionalisme dan pembaharuan merupakan modal baginya untuk mengembangkan sayapnya dalam suatu organisasi. Pada saat itu, SI dipimpin oleh HOS Cokroaminoto, dan terkenal sebagai organisasi yang radikal dan revolusioner. Ia dipercaya sebagai Penasehat Pengurus Besar SI. Di samping itu, Mas Mansur juga membentuk majelis diskusi bersama Abdul Wahab Hasbullah yang diberi nama Taswir al-Afkar (Cakrawala Pemikiran). Terbentuknya majelis ini diilhami oleh Masyarakat Surabaya yang diselimuti kabut kekolotan. Masyarakat sulit diajak maju, bahkan mereka sulit menerima pemikiran baru yang berbeda dengan tradisi yang mereka pegang. Taswir al-Afkar merupakan tempat berkumpulnya para ulama Surabaya yang sebelumnya mereka mengadakan kegiatan pengajian di rumah atau di surau masing-masing. Aktivitas Taswir al-Afkar itu mengilhami lahirnya berbagai aktivitas lain di berbagai kota, seperti Nahdhah al-Wathan (Kebangkitan Tanah Air) yang menitikberatkan pada pendidikan. Sebagai kelanjutan Nahdhah al-Wathan, Mas Mansur dan Abdul Wahab Hasbullah mendirikan madrasah yang bernama Khitab al-Wathan (Mimbar Tanah Air), kemudian madrasah Ahl al-Wathan (Keluarga Tanah Air) di Wonokromo, Far'u al-Wathan (Cabang Tanah Air) di Gresik dan Hidayah al-Wathan (Petunjuk Tanah Air) di Jombang. Taswir al-Afkar merupakan wadah yang diskusinya mau tidak mau permasalahan yang mereka diskusikan merembet pada masalah khilafiyah, ijtihad, dan madzhab. Terjadinya perbedaan pendapat antara Mas Mansur dengan Abdul Wahab Hasbullah mengenai masalah-masalah tersebut yang menyebabkan Mas Mansur keluar dari Taswir al-Afkar. Tulisan-tulisan Mas Mansur pernah dimuat di Majalah Siaran dan Majalah Kentungan di Surabaya; Penaganjur dan Islam Bergerak di Yogyakarta; Panji Islam dan Pedoman Masyarakat di Medan dan Adil di Solo. Di samping melalui majalah-majalah, Mas Mansur juga menuliskan ide dan gagasannya dalam bentuk buku, antara lain yaitu Hadits Nabawiyah; Syarat Syahnya Nikah; Risalah Tauhid dan Syirik; dan Adab al-Bahts wa al-Munadlarah.  Pada tahun 1921, Mas Mansur masuk organisasi Muhammadiyah. Aktivitas Mas Mansur dalam Muhammadiyah membawa angin segar dan memperkokoh keberadaan Muhammadiyah sebagai organisasi pembaharuan. Tangga-tangga yang dilalui Mas Mansur selalu dinaiki dengan mantap. Hal ini terlihat dari jenjang yang dilewatinya, yakni setelah Ketua Cabang Muhammadiyah Surabaya, kemudian menjadi Konsul Muhammadiyah Wilayah Jawa Timur. Puncak dari tangga tersebut adalah ketika Mas Mansur menjadi Ketua Pengurus Besar Muhammadiyah pada tahun 1937-1943, Mas Mansur dikukuhkan sebagai Ketua Pengurus Besar Muhammadiyah dalam Kongres Muhammadiyah ke-26 di Yogyakarta pada bulan Oktober 1937. Suasana yang berkembang saat itu ialah ketidakpuasan angkatan muda Muhammadiyah terhadap kebijakan Pengurus Besar Muhammadiyah yang terlalu mengutamakan pendidikan, yaitu hanya mengurusi persoalan sekolah-sekolah Muhammadiyah, tetapi melupakan bidang tabligh (penyiaran agama Islam). Angkatan Muda Muhammadiyah saat itu berpendapat bahwa Pengurus Besar Muhammadiyah hanya dikuasai oleh tiga tokoh tua, yaitu KH. Hisyam (Ketua Pengurus Besar, KH. Mukhtar (Wakil Ketua), dan KH. Syuja' sebagai Ketua Majelis PKO (Pertolongan Kesedjahteraan Oemoem). Situasi bertambah kritis ketika dalam Kongres Muhammadiyah ke-26 di Yogyakarta pada tahun 1937, ranting-ranting Muhammadiyah lebih banyak memberikan suara kepada tiga tokoh tua tersebut. Kelompok muda di lingkungan Muhammadiyah semakin kecewa. Namun setelah terjadi dialog, ketiga tokoh tersebut ikhlas mengundurkan diri. Pergeseran kepemimpinan dari kelompok tua kepada kelompok muda dalam Pengurus Besar Muhammadiyah tersebut menunjukkan bahwa Muhammadiyah saat itu sangat akomodatif dan demokratis terhadap aspirasi kalangan muda yang progresif demi kemajuan Muhammadiyah, bukan demi kepentingan perseorangan. Bahkan Pengurus Besar Muhammadiyah pada periode Mas Mansur juga banyak didominasi oleh angkatan muda Muhammadiyah yang cerdas, tangkas, dan progresif. Terpilihnya Mas Mansur sebagai Ketua Pengurus Besar Muhammadiyah meniscayakannya untuk pindah ke Yogyakarta bersama keluarganya. Untuk menopang kehidupannya, Muhammadiyah tidak memberikan gaji, melainkan ia diberi tugas sebagai guru di Madrasah Mu'allimin Muhammadiyah, sehingga ia mendapatkan penghasilan dari sekolah tersebut. Sebagai Ketua Pengurus Besar Muhammadiyah, Mas Mansur juga bertindak disiplin dalam berorganisasi. Berbeda dari Pengurus Besar Muhammadiyah sebelumnya yang seringkali menyelesaikan persoalan Muhammadiyah di rumahnya masing-masing, Mas Mansur selalu menekankan bahwa kebiasaan seperti itu tidak baik bagi disiplin organisasi, karena Pengurus Besar Muhammadiyah telah memiliki kantor sendiri beserta segenap karyawan dan perlengkapannya.  Yang perlu untuk pula dicatat, Mas Mansur tidak ragu mengambil kesimpulan tentang hukum bank, yakni haram, tetapi diperkenankan, dimudahkan, dan dimaafkan, selama keadaan memaksa untuk itu. Ia berpendapat bahwa secara hukum bunga bank adalah haram, tetapi ia melihat bahwa perekonomian ummat Islam dalam kondisi yang sangat memprihatinkan, sedangkan ekonomi perbankan saat itu sudah menjadi suatu sistem yang kuat di masyarakat. Sebelum menjadi Ketua Pengurus Besar Muhammadiyah, Mas Mansur sebenarnya sudah banyak terlibat dalam berbagai aktivitas politik ummat Islam. Setelah menjadi Ketua Pengurus Besar Muhammadiyah, ia pun mulai melakukan gebrakan politik yang cukup berhasil bagi ummat Islam dengan memprakarsai berdirinya Majelis Islam A'la Indonesia (MIAI) bersama KHA. Dahlan dan KH. Wahab Hasbullah yang keduanya dari Nahdlatul Ulama (NU). Demikian juga ketika Jepang berkuasa di Indonesia, Mas Mansur termasuk dalam empat orang tokoh nasional yang sangat diperhitungkan, yang terkenal dengan empat serangkai, yaitu Soekarno, Mohammad Hatta, Ki Hajar Dewantara, dan Mas Mansur. Ketika pecah perang kemerdekaan, Mas Mansur belum sembuh benar dari sakitnya. Namun ia tetap ikut berjuang memberikan semangat kepada barisan pemuda untuk melawan kedatangan tentara Belanda (NICA). Akhirnya ia ditangkap oleh tentara NICA dan dipenjarakan di Surabaya. Di tengah pecahnya perang kemerdekaan yang berkecamuk itulah, Mas Mansur meninggal di tahanan pada tanggal 25 April 1946. Jenazahnya dimakamkan di Gipo Surabaya. Atas jasa-jasanya, oleh Pemerintah Republik Indonesia ia diangkat sebagai Pahlawan Nasional bersama teman seperjuangannya, yaitu KH. Fakhruddin.",
          list:"",
          quotes: ""
        },
        {
          nama: "MUHAMMAD YUNUS",
          image:require('./image/tokoh/MuhammadYunus.jpg'),
          deskripsi: "MUHAMMAD YUNUS: Muhammad Yunus Anis dilahirkan di kampung Kauman Yogyakarta pada tanggal 3 Mei 1903. Sejak kecil ia dididik agama oleh kedua orang tuanya dan datuknya sendiri, terutama membaca al-Qur'an dan pendidikan akhlaq. Pendidikan formalnya dimulai di Sekolah Rakyat Muhammadiyah Yogyakarta, kemudian dilanjutkan di Sekolah Al-Atas dan Sekolah Al-Irsyad di Batavia (Jakarta) yang dibimbing oleh Syekh Ahmad Syurkati, seorang kawan akrab Kiai Dahlan.  Ia juga banyak mendirikan cabang Muhammadiyah di berbagai daerah di Indonesia. Ia dikenal juga sebagai organisator dan administrator. Tahun 1924-1926 ia menjabat sebagai Pengurus Cabang Muhammadiyah di Batavia. Kepemimpinannya semakin menonjol dan memperoleh kepercayaan dari keluarga besar Muhammadiyah. Pada tahun 1934-1936 dan 1953-1958 ia dipercaya sebagai Sekretaris Umum Pimpinan Pusat Muhammadiyah. TNI pada tahun 1954 mengangkatnya sebagai Kepala Pusroh Angkatan Darat Republik Indonesia (Imam Tentara). Berkaitan dengan tanggung jawabnya sebagai imam tentara, ia banyak memberikan pembinaan mental bagi tentara saat itu. embubaran Masyumi membawa implikasi yang buruk terhadap ummat Islam, karena ummat Islam nyaris tidak terwakili di parlemen saat itu (DPRGR). Dalam kondisi seperti itu, ia diminta oleh beberapa orang, termasuk oleh AH. Nasution, untuk bersedia menjadi anggota DPRGR yang sedang disusun oleh Presiden Soekarno sendiri. Kesediaannya menjadi anggota DPRGR sebenarnya mengundang banyak kritikan dari para tokoh Muhammadiyah saat itu, karena Muhammadiyah saat itu tidak mendukung kebijakan Presiden Soekarno yang membubarkan Masyumi dan bertindak secara otoriter menyusun anggota parlemen. Dekrit Presiden 5 Juli 1959 yang menandai era berlakunya kembali UUD'45 dalam negara kesatuan republik Indonesia menimbulkan berbagai macam peristiwa politik yang tidak sehat. Manuver dan intrik yang dilakukan oleh partai politik, terutama Partai Komunis Indonesia, sangat membahayakan bagi kondisi politik yang sehat di negeri ini. Dalam situasi seperti itulah Yunus Anis terpilih sebagai Ketua Pimpinan Pusat Muhammadiyah periode 1959-1962 dalam Muktamar Muhammadiyah ke-34 di Yogyakarta. Pada periode kepemimpinannya diusahakan melahirkan Rumusan Keperibadian Muhammadiyah. Perumusan tersebut digarap oleh sebuah team yang diketuai oleh KH. Faqih Usman, dan akan diputuskan dalam Muktamar Muhammadiyah ke-35 tahun 1962 yang bertepatan dengan setengah abad Muhammadiyah.",
          list:"",
          quotes: ""
        },
        {
          nama: "AHMAD BADAWI",
          image:require('./image/tokoh/AhmadBadawi.jpg'),
          deskripsi: "AHMAD BADAWI: Ahmad Badawi lahir di Kauman Yogyakarta pada tanggal 5 Februari 1902 sebagai putra ke-4. Usia dininya dilalui dengan belajar mengaji pada ayahnya sendiri. Pada tahun 1908-1913 menjadi santri di Pondok Pesantren Lerab Karanganyar. Di pesantren ini ia belajar banyak tentang nahwu dan sharaf. Pada tahun 1913-1915 ia belajar kepada ustadz KH. Dimyati di Pondok Pesantren Termas Pacitan. Di pesantren ini, ia dikenal sebagai santri yang pintar berbahasa Arab (Nahwu dan Sharaf) yang telah didapat di Pondok Lerab. Dan pada tahun 1915-1920 Ahmad badawi mondok di Pesantren Besuk, di Wangkal Pasuruan. Akhirnya ia mengakhiri pencarian ilmu agama di Pesantren Kauman dan Pesantren Pandean di Semarang pada tahun 1920-1921. Sedangkan pendidikan formalnya hanya didapatkan di Madrasah Muhammadiyah yang didirikan oleh KH. Ahmad Dahlan di Kauman Yogyakarta, kemudian berubah menjadi Standaarschool dan kemudian menjadi Sekolah Dasar. Tumbuhnya organisasi-organisasi kebangsaan ketika usia Badawi masih remaja membuatnya harus pandai-pandai untuk menentukan pilihan aktivitas organisasi. Masing-masing organisasi berupaya menggalang anggota-anggotanya dengan berbagai macam cara untuk bersatu mengusir pemerintah kolonial Belanda dengan berbagai variasi sesuai dengan misi dan visi organisasinya. Keinginannya untuk mengamalkan dan mengajarkan ilmu yang telah dipelajarinya dari berbagai pesantren akhirnya mengantarkannya pada Muhammadiyah sebagai pilihannya dalam beraktivitas. Hal ini dilatarbelakangi oleh misi, visi, dan orientasi Muhammadiyah selaras dengan cita-cita Badawi. Keberadaannya di Muhammadiyah lebih diperjelas dengan tercatatnya ia di buku Anggota Muhammadiyah Nomor 8543 pada tanggal 25 September 1927. Keanggotaan ini diperbarui pada zaman Jepang sehingga ia ditempatkan pada nomor 2 tertanggal 15 Februari 1944 (Jusuf Anis, tt, p. 25). Badawi pernah memasuki Angkatan Perang Sabil (APS). Ia turut beroperasi di Sanden Bantul, Tegallayang, Bleberan, Kecabean Kulon Progo. Pada tahun 1947-1949, Badawi menjadi Imam III APS bersama dengan KH. Mahfudz sebagai Imam I dan KRH. Hadjid selaku Imam II untuk Daerah Istimewa Yogyakarta. Dia juga pernah menjadi anggota Laskar Rakyat Mataram atas instruksi dari Sri Sultan Hamengku Buwono IX, dan bergabung di Batlyon Pati dan Resimen Wiroto, MPP Gedongan. Pada tahun 1950, Badawi dikukuhkan sebagai Wakil Ketua Majelis Syuro Masyumi di Yogyakarta. Semenjak ia berkiprah di Muhammadiyah, ia lebih leluasa mengembangkan potensi dirinya untuk bertabligh. Keinginan ini dijalankan melalui kegiatan sebagai guru di sekolah (madrasah) dan melalui kegiatan dakwah lewat pengajian dan pembekalan ke- Muhammadiyah-an. Prestasi di bidang tabligh telah mengantarkan Badawi untuk dipercaya menjadi Ketua Majlis Tabligh Pimpinan Pusat Muhammadiyah pada tahun 1933. Pada tahun-tahun berikutnya, ia juga diserahi amanat untuk menjadi Kepala Madrasah Za'imat (yang kemudian digabung dengan Madrasah Mualimat pada tahun 1942). Di Pimpinan Pusat Muhammadiyah ia selalu terpilih dan ditetapkan menjadi wakil ketua. Kemudian pada waktu Muktamar Muhammadiyah ke-35 di Jakarta, Badawi terpilih menjadi Ketua Pimpinan Pusat Muhammadiyah periode 1962-1965, dan pada Muktamar Muhammadiyah ke-36 di Bandung terpilih lagi menjadi Ketua Pimpinan Pusat Muhammadiyah periode 1965 - 1968. Citra politik Muhammadiyah pada periode kepemimpinan Badawi memang sedang tersudut, karena banyaknya anggota Muhammadiyah yang menjadi anggota dan pengurus Masyumi yang saat itu sedang menjadi target penghancuran oleh rezim Orde Lama. Citra ini memang sengaja dihembus-hembuskan oleh PKI, bahwa Muhammadiyah dituduh anti-Pancasila, anti-NASAKOM, dan pewaris DI/TII. Muhammadiyah saat berhadapan dengan adanya banyak tekanan politik masa Orde Lama. Menghadapi realitas politik seperti itu, Muhammadiyah akhirnya dipaksa berhadapan dengan urusan-urusan politik praktis. Muhammadiyah sendiri kurang leluasa dalam beradaptasi dan berinteraksi dengan sistem politik yang dibangun Orde Lama. Akhirnya Muhammadiyah mengambil kebijakan politik untuk turut serta terlibat dalam urusan-urusan kenegaraan. Meski demikian, realitas menunjukkan bahwa Muhammadiyah hanya mampu mengerem laju pengaruh komunis di masa Orde Lama yang kurang mengedepankan nilai agama dan moralitas bangsa. Semenjak 1963, Badawi diangkat menjadi Penasehat Pribadi Presiden di bidang agama. Perlu diperhatikan bahwa kedekatan Badawi dengan Soekarno bukan untuk mencari muka Muhammadiyah di mata Presiden. KHA. Badawi sangat bijak dan pintar dalam meloby Presiden dengan nuansa agamis. KHA. Badawi tidak menjilat dan menjadi antek Soekarno seperti yang dilakukan oleh tokoh-tokoh lain. Ia memiliki prinsip agama yang kuat, sehingga Muhammadiyah mengamanatkan kepadanya untuk mendekati Soekarno. Bagi Muhammadiyah, hal ini sangat menguntungkan. Fitnahan terhadap Muhammadiyah yang bernada negatif terus jalan, maka hal itu harus diimbangi dengan upaya mengikisnya. Soekarno sendiri sadar bahwa Muhammadiyah senafas dan seiraman dengan Masyumi, ia tetap membutuhkan kehadiran Muhammadiyah. Bahkan ia semakin menyukainya atau untuk ballance of power policy (PP. Muhammadiyah, tt, halaman 6). Iktikad baik Soekarno ini menunjukkan bahwa dirinya sangat memerlukan kahadiran Muhammadiyah untuk mengimbangi keberadaan PNI, NU, dan PKI yang dirasanya lebih dekat.  Pada tahun 1968, ia diangkat menjadi anggota Dewan Pertimbangan Agung. Pengangkatan ia berdasar pada prestasinya ketika memimpin Muhamadiyah (1962-1965 dan 1965-1968) dan pengalaman ia menjadi Penasehat Pribadi Presiden Soekarno di bidang agama. Di DPA, ia memberikan nasehat kepada Presiden Soeharto di bidang agama Islam. Di samping sebagai pemimpin, Badawi juga produktif sebagai penulis. Karya-karya tulis yang telah dihasilkannya antara lain ialah Pengadjian Rakjat, Kitab Nukilan Sju'abul-Imam (bahasa Jawa), Kitab Nikah (huruf Pegon dan berbahasa Jawa), Kitab Parail (huruf Latin berbahasa Jawa), Kitab Manasik Hadji (bahasa Jawa), Miah Hadits (bahasa Arab), Mudzakkirat fi Tasji'il Islam (bahasa Arab), Qawaidul-Chams (bahasa Arab), Menghadapi Orla (Bahasa Indonesia), dan Djadwal Waktu Shalat untuk selama2nja (HM. Jusuf Anis, tt: 27). Badawi meninggal pada hari Jum'at 25 April 1969 pada pukul 09.45 di Rumah Sakit PKU Muhammadiyah Yogyakarta. Upaya kedokteran tidak bisa menghadang takdir Allah yang telah ditentukan atasnya. Di saat meninggal, Badawi masih menjabat sebagai anggota Dewan Pertimbangan Agung dari tahun 1968. Sedang di Muhammadiyah ia ditempatkan sebagai Penasehat PP. Muhammadiyah periode 1969-1971 berdasar hasil Muktamar Muhammadiyah ke-37 di Yogyakarta",
          list:"",
          quotes: ""
        },
        {
          nama: "KH Ahmad Azhar Basyir",
          image:require('./image/tokoh/KHAhmadAsharBasyir.jpg'),
          deskripsi: "KH Ahmad Azhar Basyir Perteguh Gerakan Pembaruan Muhammadiyah menjelang Muktamar Muhammadiyah tahun 1990 dan beberapa waktu setelah itu, diselenggarakan banyak seminar untuk mengevaluasi perjalanan Muhammadiyah sebagai organisasi pembaru. Sejumlah cendekiawan muda, termasuk dari kalangan Muhammadiyah sendiri, melontarkan kritik terhadap organisasi keagamaan ini. Banyak wacana yang muncul saat itu; Muhammadiyah sudah berhenti menjadi organisasi pembaru; pengamalan agama di kalangan Muhammadiyah sudah kering, dan bahwa kalangan Muhammadiyah mengabaikan dzikir dan tak punya dimensi tasawuf serta masih banyak lagi. Terhadap kritik-kritik tersebut, tampillah KH Ahmad Azhar Basyir di garis depan memberikan penjelasan. Ulama yang kala itu menjabat sebagai Ketua Umum Muhammadiyah itu menegaskan, pada dasarnya Muhammadiyah tetap menjadi organisasi pembaru, organisasi tajdid (reformasi) dalam Islam di Indonesia. Dia berpendapat, tajdid setidaknya memiliki tiga dimensi. Pertama, dimensi akidah. Dalam hal ini, semua persoalan harus dikembalikan kepada ajaran Alquran dan hadis. Akidah sifatnya absolut, tetapi dalam perkembangan sejarah ia mengalami perkembangan yang tak jarang menimbulkan perbedaan pendapat. Akibatnya ada pikiran yang terlalu jauh, sebagaimana juga ada golongan yang 'memudahkan pengertian.' Oleh karenanya diperlukan tajdid di bidang akidah. Kedua, dimensi ibadah mahdah atau ibadah murni. Di sini, perbedaan pendapat pun harus dikembalikan pada Alquran dan hadis, karena dalam bidang ini juga terjadi perkembangan sebagaimana terjadi pada bidang akidah. Ketiga, dimensi muamalat. Terkait hal ini diperlukan pengembangan pemikiran sesuai dengan perkembangan masyarakat, sebab di dalam Alquran dan hadis persoalan muamalat berupa kaidah-kaidah umum. Tajdid dalam hal ini mempunyai makna dinamis. KH Ahmad Azhar dilahirkan di Yogyakarta tanggal 21 Nopember 1928. Dia dibesarkan di lingkungan masyarakat yang kuat berpegang pada nilai agama yakni di Kauman. Ayahnya bernama HM Basyir dan ibunya Siti Djilalah. Pendidikan formalnya dimulai pada Sekolah Rendah Muhammadiyah di Suronatan, Yogyakarta. Setelah tamat pendidikan tingkat dasar tahun 1940, diapun nyantri di Madrasah Salafiyah, Ponpes Salafiyah Tremas, Pacitan, Jawa Timur. Pada zaman revolusi, Azhar Basyir bergabung dengan kesatuan TNI Hizbullah Batalion 36 di Yogyakarta. Seusai kemerdekaan, dia pun kembali ke bangku sekolah dan masuk ke Madrasah Menengah Tinggi Yogyakarta tahun 1949. Tamat tahun 1952, lantas meneruskan ke Perguruan Tinggi Agama Islam Negeri Yogyakarta. Ahmad Azhar dipercaya menjadi ketua muda Pemuda Muhammadiyah ketika lembaga ini baru didirikan tahun 1954. Jabatan ini dikukuhkan pada Muktamar Pemuda Muhammadiyah di Palembang tahun 1956. Namun tak lama jabatan tersebut mesti diserahterimakan kepada Pimpinan Pusat Muhammadiyah berhubung dia harus kuliah di Baghdad dan Kairo. ahun 1990 pula, pada Muktamar Muhammadiyah di Semarang, ulama ini diberi amanah untuk memimpin Muhammadiyah. Pada saat yang sama, dia duduk pada beberapa organisasi, antara lain sebagai salah seorang ketua Majelis Ulama Indonesia (MUI) Pusat masa bakti 1990-1995, anggota Dewan Pengawas Syariah Bank Muamalat Indonesia, serta anggota MPR-RI periode 1993-1998.  Beberapa karyanya antara lain Hukum Perkawinan Islam, Garis Besar Ekonomi Islam, Hukum Adat di Indonesia, Prospek Hukum Islam di Indonesia, dan masih banyak lagi. Di samping itu ada pula buku yang membahas persoalan akhlak dan bidang lainnya. Saat memasuki musim haji tahun 1994, pemerintah menunjuknya selaku wakil amirulhaj Indonesia. Setelah dari Tanah Suci, dia kembali bekerja keras. Tak lama, tepatnya pada awal Juni 1994, ulama ini masuk rumah sakit karena komplikasi penyakit gula, radang usus dan jantung. Kondisinya kian memburuk. Dan pada tanggal 28 Juni 1994, KH Ahmad Azhar Basyir meninggal dunia.",
          list: "",
          quotes: ""
        },
        {
          nama: "AMIEN RAIS",
          image:require('./image/tokoh/AmienRais.jpg'),
          deskripsi: "Tokoh Reformasi Indonesia ini dilahirkan di Surakarta, 26 April 1944.  Kondisi politik dan perekonomian di Indonesia yang sudah mulai membusuk dan sangat tidak sehat bagi demokratisasi mendorong Amien Rais bersuara keras pada tahun 1993 (Tanwir Muhammadiyah di Surabaya) dengan isu suksesi kepresidenan, sebuah isu yang janggal pada saat itu karena kepemimpinan Orde Baru masih sangat kuat. Pembusukan politik dan ekonomi pada dasawarsa kedua tahun 1990-an mendorongnya kembali menggulirkan gagasan tentang suksesi, bahkan lebih luas lagi, yaitu reformasi politik di Indonesia. Berawal dari kasus Freeport dan Busang, ia mulai menggulirkan perubahan sosial yang mendasar di negeri ini. Bahkan, ia akhirnya menjadi orang terdepan dalam meruntuhkan kebobrokan politik Orde Baru. Keterlibatannya di Pimpinan Pusat Muhammadiyah dimulai sejak Muktamar Muhammadiyah tahun 1985 di Surakarta sebagai Ketua Majelis Tabligh Pimpinan Pusat Muhammadiyah. Sementara pada Muktamar Muhammadiyah ke-42 tahun 1990 di Yogyakarta, ia terpilih sebagai Wakil Ketua Pimpinan Pusat Muhammadiyah. Namun meninggalnya Azhar Basyir sebagai Ketua Pimpinan Pusat Muhammadiyah kemudian mengantarkannya untuk menggantikan kepemimpinan dalam Pimpinan Pusat Muhammadiyah. Muktamar Muhammadiyah ke-43 kembali mengamanatinya untuk menjadi Ketua Pimpinan Pusat Muhammadiyah. Guru besar Ilmu Sejarah ini dilahirkan di Sumpurkudus, Sumatera Barat, 31 Mei 1935. Sejak kecil Syafii Maarif memang sudah bergumul dengan pengetahuan tentang agama Islam. Hal itu berkat pendidikan dari almarhurn orangtuanya, Makrifah, dan juga dipertajam dengan pendidikan yang dijalani kemudian, yang akhirnya membentuk dirinya hidup secara kental dalam tradisi Islam. Setamat dari Sekolah Rakyat Ibtidaiyah di Sumpurkudus pada tahun 1947, ia melanjutkan studinya ke Madrasah Mu'allimin Lintau, Sumatera Barat. Pendidikannya di Madrasah Mu'allimin Lintau tersebut kemudian dilanjutkan ke Madrasah Mu'allimin Muhammadiyah di Yogyakarta sampai tamat pada tahun 1956. Melanjutkan ke perguruan tinggi bukanlah hal yang mudah bagi Syafii Maarif setelah menamatkan studinya dari Madrasah Mu'allimin Yogyakarta, karena setelah kedua orangtuanya meninggal dunia pembeayaan untuk melanjutkan studinya nyaris terputus. 'Saya terdampar di pantai karena belas kasihan ombak', katanya suatu saat mengilustrasikan perjalanan hidupnya dalam sebuah wawancara dengan reporter Majalah KUNTUM. Keterlibatannya sebagai Ketua Pimpinan Pusat Muhammadiyah merupakan sebuah keharusan sejarah. Ketika reformasi di Indonesia sedang bergulir, Amien Rais yang saat itu menjabat sebagai Ketua Pimpinan Pusat Muhammadiyah harus banyak melibatkan diri dalam aktivitas politik di negeri ini untuk menjadi salah satu lokomotif pergerakan dalam menarik gerbong reformasi di Indonesia. Muhammadiyah harus diselamatkan agar tidak terbawa oleh kepentingan-kepentingan jangka pendek. Pada saat itulah, ketika Muhammadiyah harus merelakan Amien Rais untuk menjadi pemimpin bangsa, maka Syafi'i Ma'arif menggantikannya sebagai Ketua Pimpinan Pusat Muhammadiyah. Sebagai salah seorang Wakil Ketua Pimpinan Pusat Muhammadiyah, ia terpilih dan dikukuhkan sebagai Ketua Pimpinan Pusat Muhammadiyah melalui Sidang Pleno Diperluas yang diselenggarakan Pimpinan Pusat Muhammadiyah. Ia harus melanjutkan tongkat kepemimpinan Muhammadiyah sampai Muktamar Muhammadiyah ke-44 tahun 2000 di Jakarta. Pada Muktamar ke-44 tahun 2000 ia dipilih kembali menjadi Ketua Pimpinan Pusat Muhammadiyah untuk periode masa jabatan 2000-2005. Setelah Muktamar ke-45 di Malang, jabatan Ketua PP Muhammadiyah berganti sebutan menjadi Ketua Umum. Pada muktamar tersebut terpilih Prof. Dr. Din Syamsuddin menjadi Ketua Umum PP Muhammadiyah, sedangkan Prof. Dr. A. Syafi'i Ma'arif menjadi Penasehat PP Muhammadiyah bersama Prof. Amien Rais, Prof. Drs. H. Asjmuni Abdurrahman,Prof. Dr. H. Ismail Sunny, S.H., MCL. dan Ustadz K. H Abdur Rahim Noor. M.A.",
          list: "",
          quotes: ""
        },
        {
          nama: "Prof. DR. M. Din Syamsuddin, MA",
          image:require('./image/tokoh/ProfDRMDinSyamsuddinMA.jpg'),
          deskripsi: "Prof. Dr. KH. Muhammad Sirajuddin Syamsuddin, MA, atau dikenal dengan Din Syamsuddin (lahir di Sumbawa, Nusa Tenggara Barat, 31 Agustus 1958; umur 60 tahun), adalah seorang tokoh Muhammadiyah. Menjabat sebagai Ketua Umum Pimpinan Pusat Muhammadiyah periode 2005-2010 dan 2010-2015, jabatannya ini lalu digantikan oleh Dr. KH. Haedar Nashir, M.Si. Istrinya bernama Fira Beranata, dan memiliki 3 orang anak. Ia diamanati untuk menjadi Ketua Umum Majelis Ulama Indonesia Pusat, yang sebelumnya menjabat sebagai Wakil Ketua Umum Majelis Ulama Indonesia Pusat menggantikan Dr (HC). KH. Sahal Mahfudz yang meninggal dunia pada Jumat 24 Januari 2014.",
          list: "",
          quotes:[
            "Pembentukan watak bangsa masih menjadi agenda bersama sekolah, masyarakat, dan keluarga. Ayo bangkit benahi.",
          ]  
        },
      ],
      Profile:{
        image: require('./image/logo.png'),
        deskripsi: "",
      },
      TokohForHome:[]
    }
  }
  static navigationOptions = {
    header: null
   };
  
  gantiTokoh(){
    this.setState({
      current_tokoh: Math.floor(Math.random() * this.state.TokohForHome.length )
    })
  }
  
  componentWillMount(){
    this.setState({
      TokohForHome: this.state.tokoh.filter(function(item){
        return item.quotes != "";
      })
    })
  }
  
  componentDidMount(){
    this.interval = setInterval(() => this.gantiTokoh(), 3000);
  }

  cekUser = () => {
    if (this.state.username === ""){
      alert("salah")
    }else{
      this.setState({
        login: "home",
        disabled: false
      })
    }
  }
  
  render() {
  const isAndroid= Platform.OS==='android'
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {this.state.active === 'Home' ? (
              <View style={styles.active}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Home'})} color="transparent" title="Home" >
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Home</Text>
                  </View>
                </TouchableOpacity>
              </View>
              ):(
                <View style={styles.navigation}>
                  <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Home'})} color="transparent" title="Home" >
                    <View style={{paddingVertical: 5}}>
                      <Text style={{color: "white"}}>Home</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
            {this.state.active === 'Tokoh' ? (
              <View style={styles.active}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Tokoh'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Tokoh</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Tokoh'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Tokoh</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {this.state.active === 'Visi' ? (
              <View style={styles.active}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Visi'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Visi & Misi</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Visi'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Visi & Misi</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {this.state.active === 'Sejarah' ? (
              <View style={styles.active}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Sejarah'})} color="transparent" title="Sejarah">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Biografi</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity disabled={this.state.disabled} onPress={() => this.setState({active: 'Sejarah'})} color="transparent" title="Sejarah">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Biografi</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        {this.state.active === 'Home' ? (
          <View style={{height: "93%",alignItems: "center", flex: 1}}>
            {this.state.login === "home" ? (
              <View style={{height: "93%",alignItems: "center", flex: 1, width: "100%"}}>
                <Text>Halo {this.state.username}</Text>
                <Image style={{maxWidth: "50%", maxHeight: "50%", width: "100%"}} source={this.state.TokohForHome[this.state.current_tokoh].image} {...this.props} />
                <Text style={{textAlign: "center"}}>{this.state.TokohForHome[this.state.current_tokoh].nama}</Text>
                <Text style={{textAlign: "center"}}>{this.state.TokohForHome[this.state.current_tokoh].quotes}</Text>
              </View>
            ):(
              <View style={styles.Home}>
                <Image source={this.state.Profile.image} style={styles.imageLogo}/>
                <Text>Login</Text>
                <TextInput placeholder="Input nama Anda" onChangeText={(username) => this.setState({username})} style={{borderWidth: 1, height: 40,fontSize: 12, marginVertical: 10, width: "90%", borderRadius: 6}}/>
                <TouchableHighlight>
                  <Button onPress={() => this.cekUser()} color={"blue"}  title="Login" />
                </TouchableHighlight>
              </View>
            )}
          </View>
        ):this.state.active === 'Tokoh' ? (
          <ScrollView style={{height: "93%"}}>
                <FlatList 
                data={this.state.tokoh}
                renderItem= {(({item, i}) => {
                    return (
                    <View style={{flex: 1,flexDirection: 'column', margin: 1}}>
                      <TouchableHighlight 
                          onPress={() => this.props.navigation.navigate('Profile', {name: item.nama, image: item.image, deskripsi: item.deskripsi, list: item.list, other_deskripsi: item.other_deskripsi})}>
                          <Image 
                          source={item.image} {...this.props}   
                          style={styles.imageThumbnail}/>
                      </TouchableHighlight>
                      <Text style={{fontSize: 10, textAlign: "center"}}>{item.nama}</Text>
                      </View>
                    )}
                )}
                numColumns={3}
                keyExtractor={(item, index) => index}
                />
          </ScrollView>
        ):this.state.active === 'Visi' ? (
          <ScrollView style={{height: "93%", flex: 1, flexDirection: "column"}}>
            <Text style={{textAlign: "center"}}>Visi</Text>
            <View style={{ marginVertical: 20}}>
              <Text>{this.state.visi}</Text>
            </View>
            <Text style={{textAlign: "center"}}>Misi</Text>
            <View style={{ marginVertical: 20}}>
              <Text>{this.state.misi.judul}</Text>
              <View style={{flexDirection: "column"}}>
              {this.state.misi.list.map((item, i) => {
                return(
                  <View style={{marginVertical: 10, marginLeft: 5}} key={i}>
                    <Text>{i + 1}.{item}</Text>
                  </View>
                )
              })}
              </View>
            </View>
          </ScrollView>
        ):(
          <WebView
            source = {this.state.web}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: "row"
  },
  active:{
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  header:{
    flex: 2,
    display: "flex",
    flexDirection: 'row',
    paddingVertical: 3 ,
    justifyContent: "space-around",
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: "100%",
    backgroundColor: "blue",
    color: "white"
  },
  color:{
    color: "white"
  },
  imageThumbnail:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    maxWidth: "100%",
    maxHeight: "100%"
  },
  Home:{
    flexDirection: 'column', 
    margin: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    marginBottom: 50,
    width: "60%"
  },
  imageLogo:{
    height: 130, 
    width: 130,
    maxWidth: "100%",
    maxHeight: "100%",
  }
});
