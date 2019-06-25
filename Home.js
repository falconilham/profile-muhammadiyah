import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableHighlight, Image} from 'react-native';
import {WebView} from 'react-native-webview';
export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      active: 'Home',
      data: "",
      tokoh: [
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/5d0a035826279.jpg'),
          deskripsi: "KH. Ahmad Dahlan: Lahir 1 Agustus 1868 Yogyakarta Meninggal 23 Februari 1923 Yogyakarta Dikenal karena Pendiri Muhammadiyah dan Pahlawan Nasional Agama Islam Pasangan Hj. Siti Walidah Nyai Abdullah Nyai Rum Nyai Aisyah Nyai Yasin Anak Djohanah Siradj Dahlan Siti Busyro Irfan Dahlan Siti Aisyah Siti Zaharah Dandanah Kyai Haji Ahmad Dahlan (lahir di Yogyakarta 1 Agustus 1868 – meninggal di Yogyakarta 23 Februari 1923 pada umur 54 tahun) adalah seorang Pahlawan Nasional Indonesia. Pada umur 15 tahun, ia pergi haji dan tinggal di Mekah selama lima tahun. Pada periode ini, Ahmad Dahlan mulai berinteraksi dengan pemikiran-pemikiran pembaharu dalam Islam, seperti Muhammad Abduh, Al-Afghani, Rasyid Ridha dan Ibnu Taimiyah Ketika pulang kembali ke kampungnya tahun 1888, ia berganti nama menjadi Ahmad Dahlan. Pada tahun 1903, ia bertolak kembali ke Mekah dan menetap selama dua tahun. Pada masa ini, ia sempat berguru kepada Syeh Ahmad Khatib yang juga guru dari pendiri NU, KH. Hasyim Asyari. Pada tahun 1912, ia mendirikan Muhammadiyah di kampung Kauman Yogyakarta Disamping aktif dalam menggulirkan gagasannya tentang gerakan dakwah Muhammadiyah, ia juga dikenal sebagai seorang wirausahawan yang cukup berhasil dengan berdagang batik yang saat itu merupakan profesi wiraswasta yang cukup menggejala di masyarakat sebagai seorang yang aktif dalam kegiatan bermasyarakat dan mempunyai gagasan-gagasan cemerlang, Dahlan juga dengan mudah diterima dan dihormati di tengah kalangan masyarakat, sehingga ia juga dengan cepat mendapatkan tempat di organisasi Jam'iyatul Khair, Budi Utomo, Syarikat Islam dan Comite Pembela Kanjeng Nabi Muhammad SAW. Pada tahun 1912, Ahmad Dahlan pun mendirikan organisasi Muhammadiyah untuk melaksanakan cita-cita pembaruan Islam di bumi Nusantara. Ahmad Dahlan ingin mengadakan suatu pembaruan dalam cara berpikir dan beramal menurut tuntunan agama Islam, la ingin mengajak umat Islam Indonesia untuk kembali hidup menurut tuntunan al-Qur'an dan al-Hadits. Perkumpulan ini berdiri bertepatan pada tanggal 18 Nopember 1912, berbagai fitnahan, tuduhan dan hasutan datang bertubi-tubi kepadanya. la dituduh hendak mendirikan agama baru yang menyalahi agama Islam. Ada yang menuduhnya kyai palsu karena sudah meniru-niru bangsa Belanda yang Kristen mengajar di sekolah Belanda serta bergaul dengan tokoh-tokoh Budi Utomo yang kebanyakan dari golongan priyayi, dan bermacam-macam tuduhan lain. Saat itu Ahmad Dahlan sempat mengajar agama Islam di sekolah OSVIA Magelang yang merupakan sekolah khusus Belanda untuk anak-anak priyayi, Bahkan ada pula orang yang hendak membunuhnya. Namun ia berteguh hati untuk melanjutkan cita-cita dan perjuangan pembaruan Islam di tanah air bisa mengatasi semua rintangan tersebut Pada tanggal 20 Desember 1912, Ahmad Dahlan mengajukan permohonan kepada Pemerintah Hindia Belanda untuk mendapatkan badan hukum. Permohonan itu baru dikabulkan pada tahun 1914, dengan Surat Ketetapan Pemerintah No. 81 tanggal 22 Agustus 1914. Izin itu hanya berlaku untuk daerah Yogyakarta dan organisasi ini hanya boleh bergerak di daerah Yogyakarta.Berbagai fitnahan, tuduhan dan hasutan datang bertubi-tubi kepadanya. la dituduh hendak mendirikan agama baru yang menyalahi agama Islam. Ada yang menuduhnya kyai palsu, karena sudah meniru-niru bangsa Belanda yang Kristen, mengajar di sekolah Belanda, serta bergaul dengan tokoh-tokoh Budi Utomo yang kebanyakan dari golongan priyayi, dan bermacam-macam tuduhan lain. Saat itu Ahmad Dahlan sempat mengajar agama Islam di sekolah OSVIA Magelang, yang merupakan sekolah khusus Belanda untuk anak-anak priyayi. Bahkan ada pula orang yang hendak membunuhnya, Namun ia berteguh hati untuk melanjutkan cita-cita dan perjuangan pembaruan Islam di tanah air bisa mengatasi semua rintangan tersebut. Pada tanggal 20 Desember 1912, Ahmad Dahlan mengajukan permohonan kepada Pemerintah Hindia Belanda untuk mendapatkan badan hukum, permohonan itu baru dikabulkan pada tahun 1914, dengan Surat ketetapan Pemerintah No. 81 tanggal 22 Agustus 1914. Izin itu hanya berlaku untuk daerah Yogyakarta dan organisasi ini hanya boleh bergerak di daerah Yogyakarta. Untuk mengatasinya, maka KH. Ahmad Dahlan menyiasatinya dengan menganjurkan agar cabang Muhammadiyah di luar Yogyakarta memakai nama lain. Misalnya Nurul Islam di Pekalongan, Al-Munir di Ujung Pandang, Ahmadiyah[4] di Garut. Sedangkan di Solo berdiri perkumpulan Sidiq Amanah Tabligh Fathonah (SATF) yang mendapat pimpinan dari cabang Muhammadiyah. Bahkan dalam kota Yogyakarta sendiri ia menganjurkan adanya jama'ah dan perkumpulan untuk mengadakan pengajian dan menjalankan kepentingan Islam. Muhammadiyah makin lama makin berkembang hampir di seluruh Indonesia. Oleh karena itu, pada tanggal 7 Mei 1921 Dahlan mengajukan permohonan kepada pemerintah Hindia Belanda untuk mendirikan cabang-cabang Muhammadiyah di seluruh Indonesia, permohonan ini dikabulkan oleh pemerintah Hindia Belanda pada tanggal 2 September 1921. Sebagai seorang yang demokratis dalam melaksanakan aktivitas gerakan dakwah Muhammadiyah, Dahlan juga memfasilitasi para anggota Muhammadiyah untuk proses evaluasi kerja dan pemilihan pemimpin dalam Muhammadiyah. Atas jasa-jasa KH. Ahmad Dahlan dalam membangkitkan kesadaran bangsa Indonesia melalui pembaharuan Islam dan pendidikan, maka Pemerintah Republik Indonesia menetapkannya sebagai Pahlawan Nasional dengan surat Keputusan Presiden no. 657 tahun 1961. Dasar-dasar penetapan itu ialah sebagai berikut:",
          list: [
            "1. KH. Ahmad Dahlan telah mempelopori kebangkitan ummat Islam untuk menyadari nasibnya sebagai bangsa terjajah yang masih harus belajar dan berbuat.",
            "2. Dengan organisasi Muhammadiyah yang didirikannya, telah banyak memberikan ajaran Islam yang murni kepada bangsanya. Ajaran yang menuntut kemajuan, kecerdasan, dan beramal bagi masyarakat dan umat, dengan dasar iman dan Islam.",
            "3. Dengan organisasinya, Muhammadiyah telah mempelopori amal usaha sosial dan pendidikan yang amat diperlukan bagi kebangkitan dan kemajuan bangsa, dengan jiwa ajaran Islam.",
            "4. Dengan organisasinya, Muhammadiyah bagian wanita (Aisyiyah) telah mempelopori kebangkitan wanita Indonesia untuk mengecap pendidikan dan berfungsi sosial, setingkat dengan kaum pria",
            "Artikel utama: Sang Pencerah kisah hidup dan perjuangan Ahmad Dahlan mendirikan Muhammadyah diangkat ke layar lebar dengan judul Sang Pencerah. Tidak hanya menceritakan tentang sejarah kisah Ahmad Dahlan, film ini juga bercerita tentang perjuangan dan semangat patriotisme anak muda dalam merepresentasikan pemikiran-pemikirannya yang dianggap bertentangan dengan pemahaman agama dan budaya pada masa itu, dengan latar belakang suasana Kebangkitan Nasional. "
          ],
          other_deskripsi: ""   
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/5d0a03348937c.jpg'),
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
          other_deskripsi: "Selama hidupnya beliau dikenal sebagai sosok pembaharu dan pemikir ulung, bersama KH Ahmad Dahlan, beliau membuka Perguruan Tingg Ilmu Al-Qur’an [khusus laki-laki] dan membangun bersama KH Sulaiman Affan Institut Ilmu Al-Qur’an [Khusus wanita] yang kemudian dikembangkan dan dilestarikan kemurniannya oleh ibu Herwini Yusuf. Beliau wafat pada 7 November 2001, semoga allah SWT merahmati dan meridhoi beliau Amiin. (zar/ diterjemahkan oleh Amirah)."
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/5d0a036807eb1.jpg'),
          deskripsi: "KH. HASYIM ASYARI: KH. Hasyim Asyari, lahir pada tanggal 14 Februari 1871 bertepatan dengan tanggal 24 Dzulqadah 1287 H, di desa Gedang, 2 km sebelah utara kota Jombang Jawa Timur, nama kecilnya adalah Muhammad Hasyim.Silsilah KH. Hasyim Asyari berasal dari keturunan nigrat dan ulama. Garis keturunan ini bila ditelusuri sebagai berikut : Muhammad Hasyim bin Halimah binti Layyinah binti Soihah bin Abdul Jabar bin Ahmad bin Pangeran Sambo bin Pangeran Benowo bin Joko Tingkir (Mas Kerebet) bin Prabu Brawijaya. Sedangkan dari garis bapak, sampai pada keluarga Ahlu Syaiban yang berasal dari keturunan para bangsawan Arab yang datang ke Indonesia pada abad ke-4 H untuk menyebarkan Islam ke Asia Selatan dan mendirikan pusat dakwah Islam dan kesultanan-kesultanan Ahlu Adhamah Khan. Mereka adalah keturunan Imam Jafar Shodiq bin Imam Muhammad Baqir (Chairul Anam, 1985 : 56-57 ; Muhammad Asad Syihab, 1994 : 27). KH. Hasyim Asyari, selain sebagai ulama besar juga pahlawan bangsa. Semangat kepahlawanannya tidak pernah surut, bahkan beberapa kali beliau memberikan nasehat kepada Bung Tomo dan Panglima Besar Soedirman yang datang ke Tebuireng, melaporkan tentang perkembangan agresi militer Belanda yang saat itu sudah memasuki Singosari Malang.Latar Belakang Pendidikan dan Profesi Sejak kanak-kanak, Hasyim dikenal sangat cerdas dan rajin belajar. Ia mula-mula belajar agama dengan ayahnya, yaitu belajar ilmu tauhid, fiqih, tafsir dan bahasa Arab. Karena kecerdasannya, maka dalam usia 13 tahun, Hasyim sudah membantu ayahnya mengajar para santri yang lebih senior. Rasa dahaga akan ilmu pengetahuan, membuat Hasyim menjadi seorang pengelana ilmu, karena itulah selama dua tahun ia belajar dari pondok ke pondok pesantren lainnya. Setelah menikah Kiyayi Yakub mengajak Hasyim dan istrinya pergi haji ke Mekkah. Setelah menunaikan ibadah haji, Kyai Yakub memerintahkan anak dan mantunya agar tetap bermukim di Mekkah untuk menuntut ilmu. Ada anggapan saat itu, bahwa seorang ulama, siapapun juga jika belum belajar di Mekkah selama bertahun-tahun, belum dianggap cukup ilmunya. Karena itulah Hasyim mulai belajar menekuni ilmu fiqih mazhab Syafi’i dan ilmu hadits kitab Bukhari Muslim, dibawah bimbingan guru-guru terkenal, seperti Syeikh Ahmad Khatib Minangkabau, Syeikh Nawawi al Bantani dan Syeikh Mahfudz Termas. Sebagaimana pandangan gurunya, KH. Hasyim Asyari secara tegas mempertahankan ajaran-ajaran mazhab dan memandang penting praktik-praktik tharekat. Muhammad Hasyim juga menerima pikiran modernis dari Muhammad Abduh guna membangkitkan kembali semangat Islam. Namun ia kurang sependapat dengan Muhammad Abduh soal “melepaskan keterikatan” dengan mazhab dalam memahami Islam. Begitu juga dengan praktik-praktik keagamaan ia tidak menganggapnya sebagai bentuk kesalahan dan menyimpang dari ajaran Islam seperti anggapan Muhammad Abduh. Dalam Konteks inilah, Chairul Anam (1985:60-61) menilai KH. Hasyim Asyari berbeda dengan Muhammad Abduh. Menurut KH. Hasyim Asyari, penguasaan mazhab adalah suatu yang prinsipil, guna memahami maksud sebenarnya dari Al-Qur’an dan hadits. Tanpa mempelajari pendapat ulama besar, khususnya Imam Empat yaitu ; Imam Syafi’i, Imam Maliki, Imam Hanafi dan Imam Hambali, hanya akan melahirkan pemutarbalikan pengertian dari ajaran Islam itu sendiri.Chairul Anam dengan penilaian itu mencoba menegaskan keteguhan pendirian KH. Hasyim Asyari, yang kemudian menjadi landasan sikap tradisi pemahaman keagamaan NU, pernah juga disampaikan KH. Hasyim Asyari di hadapan para ulama peserta Muktamar NU ke-3 September 1982 yang dikenal dengan “Muqaddimah Qanun Asasi” Nahdlatul Ulama (pembukaan Anggaran Dasar Nahdlatul Ulama). ketika itu Kyai Hasyim Asyari berkata: “Hai Para ulama dan pemimpin yang takut kepada Allah, kalian sudah menuntut ilmu agama dari orang-orang yang hidup sebelum kalian dan begitu pula generasi sebelumnya dengan bersambung sampai pada kalian, dan kalian harus melihat dari sikap kalian mencari ilmu atau menuntut ilmu agama. Berhubungan dengan cara menuntut ilmu pengetahuan demikian itu, maka kalian menjadi pemegang kuncinya, bahkan menjadi pintu-pintu gerbangnya ilmu pengetahuan agama. Oleh karena itu janganlah memasuki suatu rumah kecuali melalui pintunya. Siapa saja yang memasuki rumah tidak melalui pintunya maka “pencurilah” namanya.”Semangat pembaruan itu terkesan tidak sejalan dengan semangat perlunya bermazhab yang kemudian dikembangkan oleh KH. Hasyim Asyari setelah pulang ke Tanah Air. Karena itu ketika kembali dari Mekkah, Kyai Hasyim melalui pesantren Tebuireng dan Jami’iyyah Nahdlatul Ulama berusaha untuk terus mengembangkan paham Islam ala “Ahlussunnah waljamaah”, yang mengakui mazhab empat (Imam Syafi’i, Imam Hanafi, Imam Hambali, Imam Maliki). Dalam konteks itulah, maka Muhammadiyah menyatakan kehadiran NU adalah sebagai reaksi terhadap berdirinya gerakan Islam reformasi di Indonesia (Musthofa Kamal Pasha dkk :1976: 23), yang diperjuangkan oleh Jamaluddin al Afghani, Muhammad Abduh dan Rashid Ridha. Adanya perbedaah pemahaman keislaman antara kaum modernis dan tradisionalis sebenarnya sisi lain dari paradigma pemahaman Islam saja. Kalangan Islam modernis seperti Muhammadiyah memahami Islam dari atas mulai dari Al-Qur’an, Hadits, ijmak, Qiyas dan seterusnya. Sedangkan kalangan Islam tradisonalis NU sebaliknya, dari bawah, yaitu mulai dari kitab fiqih/kitab kuning, qiyas, ijma, hadits dan Al-Qur’an. Karena perbedaan cara pandang tersebut kaum modernis lebih leluasa dalam melakukan ijtihad dari ajaran pokoknya yang memiliki kebenaran mutlak (Al-Qur’an) sedangkan kelompok tradisionalis agak kesulitan terutama dalam merespons paham pembaruan yang digagas oleh Jamaluddin Al-Afghani, pada awal abad ke-20, karena sumber prioritas ajaran yang digunakan bukan pokok (cabang), melainkan hasil ijtihad juga. Selama ini kaum ulama tradisional terkesan menjadikan soal furu’ sebagai ajaran pokok yang mutlak kebenarannya. Sementara Harus Nasution (1979 : 113) memandang bahwa ajaran cabang yang merupakan turunan (tafsir) dari ajaran pokok (Al-Qur’an) tidak memiliki sifat kebenaran mutlak, artinya bisa benar bisa juga salah. Karena pemikiran-pemikiran itu hasil akal para mujtahid yang tidak bersifat maksum itak dapat berbuat salah), sehingga interpretasi ulama tidak memiliki “sifat mutlak”.Demikian pula tahun 1990 di Jombang, ulama NU menandaskan pentingnya bermazhab secara metodologis (manhaji) disamping mengikuti produk atau penetapan hukum yang telah ditentukan oleh imam mujtahid mutlak (Mazhab empat). Maksud dari mazhab secara manhaj yaitu mengikuti yaitu mengikuti jalan pikiran dan kaidah penetapan hukum yang telah disusun oleh imam mazhab, dengan kata lain mengikuti metodologi pemikiran tradisional yang telah baku (ushulul fiqh).  Melalui cara pendekatan tersebut NU mampu merespon pembaruan Islam “dari dakwah” yaitu fiqih sosial yang orientasinya mengacu pada peningkatan peran sosial politik ulama. Paradigma fiqih sosial ini didasarkan kepada:",
          list: [
            "1. selalu diupayakan reinterpretasi terhadap teks-teks fiqih untuk mencari konteksnya yang baru.",
            "2. makna bermazhab berubah dari bermazhab secara tekstual (qauli) kepada bermazhab secara metodologis (manhaj).",
            "3. melakukan verifikasi mendasar terhadap ajaran yang pokok (ushul) dan cabang (furu’).",
            "4. fiqih dihadirkan sebagai etika sosial bukan sebagai hukum positif negara.",
            "5. mengenalkan metodologi pemikiran filosofis terutama dalam masalah budaya dan sosial. Butir-butir pemikiran tersebut telah dibahas dalam Munas alim ulama NU, tahun 1992.",
          ],
          other_deskripsi: "Dalam praktiknya tradisi kajian-kajian keislaman tentang fiqih bahtsul masail telah dilakukan NU sejak berdirinya tahun 1926 sampai sekarang. Melalui media tersebut, Kyai Hasyim merambah jalan untuk mengembangkan masyarakat dengan merintis “kelas musyawarah” sebagai kegiatan rutin bagi santri senior di Tebuireng, kemudian diteruskan oleh Kyai Wahab Hasbullah yang membuka forum diskusi dan kursus masalah keagamaan, sehingga melahirkan forum bahtsul masail."
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/5d0a032150a1e.jpg'),
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
          other_deskripsi: "Dari beberapa tulisannya yang antara lain berjudul Jihad seruan kepada Kehidupan Baru; Tauhid Membentuk Kepribadian Muslim; dan Ruh Islam nampak sekali bahwa ia ingin mencari Islam yang paling lurus yang tercakup dalam paham yang murni dalam Islam. Buya H. Ahmad Rasyid Sutan Mansur akhirnya meninggal pada hari Senin tanggal 25 Maret 1985 yang bertepatan 3 Rajab 1405 di Rumah Sakit Islam Jakarta dalam usia 90 tahun.  Jenazah almarhum buya dikebumikan di Pekuburan Umum Tanah Kusir, Jakarta Selatan setelah dishalatkan di masjid Kompleks Muhammadiyah. Buya Hamka menyebutnya sebagai ideolog Muhammadiyah dan M. Yunus Anis dalam salah satu kongres Muhammadiyah mengatakan, bahwa di Muhammadiyah ada dua bintang. Bintang Timur adalah KH. Mas Mansur dari Surabaya, ketua PP Muhammadiyah 1937-1943 dan bintang Barat adalah AR. Sutan mansur dari Minangkabau, ketua PP Muhammadiyah 1953-1959."
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/g.jpg')
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/g.jpg')
        },
        {
          nama: "KH. HASYIM ASYARI",
          image: require('./image/tokoh/g.jpg')
        },
        {
          nama: "KH. HASYIM ASYARI",
          image:require('./image/tokoh/g.jpg')
        },
        {
          nama: "KH. HASYIM ASYARI",
          image:require('./image/tokoh/g.jpg')
        }
      ],
      Profile:{
        image: require('./image/logo.png'),
        deskripsi: "",
      }
    }
  }
  static navigationOptions = {
    header: null
   };

  componentDidMount(){
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {this.state.active === 'Home' ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: "home"})} color="transparent" title="Home" >
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Home</Text>
                  </View>
                </TouchableOpacity>
              </View>
              ):(
                <View style={styles.navigation}>
                  <TouchableOpacity onPress={() => this.setState({active: 'Home'})} color="transparent" title="Home" >
                    <View style={{paddingVertical: 5}}>
                      <Text style={{color: "white"}}>Home</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
            {this.state.active === 'Tokoh' ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: 'Tokoh'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Tokoh</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity onPress={() => this.setState({active: 'Tokoh'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Tokoh</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {this.state.active === 'Visi' ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: 'Visi'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Visi & Misi</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity onPress={() => this.setState({active: 'Visi'})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Visi & Misi</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {this.state.active === 'Sejarah' ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: 'Sejarah'})} color="transparent" title="Sejarah">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Sejarah & Perkembangan</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity onPress={() => this.setState({active: 'Sejarah'})} color="transparent" title="Sejarah">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Sejarah & Perkembangan</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        {this.state.active === 'Home' ? (
          <View style={styles.Home}>
            <Image source={this.state.Profile.image} style={styles.imageLogo}/>
            <Text>Home</Text>
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
          <View>
            <Text>Visi & Misi</Text>
          </View>
        ):(
          <View>
            <Text>sejarah</Text>
          </View>
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
    flex: 1,
    flexDirection: 'column', 
    margin: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    marginVertical: 10
  },
  imageLogo:{
    height: 130, 
    width: 130,
    maxWidth: "100%",
    maxHeight: "100%",
  }
});
