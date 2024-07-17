import { Metadata } from "next"

export const metadata ={
  title:"About Us",
}

export default function page() {
  return (
    <main className="container mx-auto p-4 mt-10">
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Company History</h2>
        <p>
          Didirikan pada tahun 2015 oleh sekelompok pemuda bersemangat dari
          Sumatra Barat, aplikasi Pariwisata Wilayah Sumatra Barat lahir dari
          kebutuhan untuk memperkenalkan keindahan alam dan kekayaan budaya
          lokal yang belum terekspos secara luas. Dengan latar belakang
          teknologi informasi dan pariwisata, tim ini memulai perjalanan mereka
          dengan penelitian mendalam dan kolaborasi bersama pemerintah daerah
          serta pelaku industri pariwisata. Pada 2019, aplikasi ini diluncurkan
          resmi, menawarkan fitur-fitur lengkap mulai dari informasi destinasi
          hingga pemesanan online. Berkat dedikasi dan inovasi terus-menerus,
          aplikasi ini telah meraih berbagai penghargaan dan pengakuan. Visi
          perusahaan adalah menjadi platform utama dalam mempromosikan
          pariwisata Sumatra Barat secara berkelanjutan melalui teknologi,
          dengan misi menyediakan informasi akurat, meningkatkan aksesibilitas,
          mendukung pelaku industri lokal, dan terus mengembangkan fitur-fitur
          inovatif untuk pengalaman wisata yang lebih baik.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">CEO</p>
            <p>
              John has over 20 years of experience in the industry and has been
              leading our company to new heights since [year].
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
            <p>
              Jane is a tech visionary with a deep understanding of technology
              and innovation, driving our tech strategy.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Sam Wilson</h3>
            <p className="text-gray-600">CFO</p>
            <p>
              Sam has a strong background in finance and has been instrumental
              in securing funding and managing our finances.
            </p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Culture</h2>
        <p>
          Nilai-Nilai Inti Di aplikasi Pariwisata Wilayah Sumatra Barat, kami
          meyakini bahwa budaya perusahaan adalah fondasi yang membentuk
          identitas dan keberhasilan kami. Kami berkomitmen pada nilai-nilai
          inti yang mencerminkan dedikasi kami terhadap inovasi, kolaborasi, dan
          keberlanjutan. <br />
          Inovasi Berkelanjutan: Kami terus mendorong batasan
          teknologi dan kreativitas untuk memberikan pengalaman terbaik bagi
          pengguna. Setiap anggota tim diharapkan untuk berpikir out-of-the-box
          dan mencari solusi baru yang dapat meningkatkan produk dan layanan
          kami. <br />
          Kolaborasi dan Kerjasama: Kami menghargai kerjasama tim yang
          solid dan percaya bahwa keberhasilan sejati hanya dapat dicapai
          melalui kerja sama yang kuat. Kami mendorong komunikasi terbuka,
          saling menghormati, dan saling mendukung di antara semua anggota tim. <br />
          Keberlanjutan dan Tanggung Jawab Sosial: Kami berkomitmen untuk
          mempromosikan pariwisata yang berkelanjutan dan bertanggung jawab.
          Kami berusaha untuk membuat dampak positif bagi masyarakat lokal dan
          lingkungan melalui inisiatif yang mendukung pariwisata ramah
          lingkungan dan pemberdayaan komunitas.
        </p>
      </section>
    </main>
  )
}
