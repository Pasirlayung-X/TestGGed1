import React from 'react';

const PenyebabGRK: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Penyebab Utama Peningkatan GRK</h3>
        <p className="text-gray-600 mb-4">
          Peningkatan emisi Gas Rumah Kaca (GRK) didorong oleh berbagai aktivitas manusia di berbagai sektor. Memahami sumber-sumber ini penting untuk menemukan solusi yang efektif.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 marker:text-emerald-500">
          <li>
            <strong>Pembakaran Bahan Bakar Fosil:</strong> Ini adalah sumber terbesar emisi CO2. Penggunaan batu bara, minyak, dan gas untuk pembangkit listrik, transportasi (mobil, pesawat), dan pemanasan gedung melepaskan sejumlah besar karbon yang telah tersimpan jutaan tahun ke atmosfer.
          </li>
          <li>
            <strong>Pertanian, Kehutanan, dan Penggunaan Lahan:</strong> Sektor ini merupakan sumber utama emisi metana (dari fermentasi enterik pada ternak ruminansia dan sawah) dan dinitrogen oksida (dari pupuk sintetis). Deforestasi (penebangan hutan) untuk lahan pertanian juga berkontribusi besar karena mengurangi kemampuan bumi untuk menyerap CO2.
          </li>
          <li>
            <strong>Industri:</strong> Proses industri tertentu, seperti produksi semen, baja, dan bahan kimia, melepaskan GRK secara langsung. Penggunaan energi dari bahan bakar fosil untuk menjalankan mesin-mesin pabrik juga sangat signifikan.
          </li>
          <li>
            <strong>Pengelolaan Limbah:</strong> Sampah organik (sisa makanan, daun) yang menumpuk di Tempat Pembuangan Akhir (TPA) akan terurai secara anaerobik (tanpa oksigen) dan menghasilkan metana, gas rumah kaca yang kuat.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PenyebabGRK;