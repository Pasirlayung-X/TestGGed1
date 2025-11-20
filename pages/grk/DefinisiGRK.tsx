import React from 'react';

const DefinisiGRK: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Apa itu Gas Rumah Kaca (GRK)?</h3>
      <div className="text-gray-600 space-y-4">
        <p>
          Gas Rumah Kaca (GRK) adalah gas-gas di atmosfer bumi yang berfungsi seperti kaca di dalam rumah kaca. Mereka memerangkap panas matahari dan mencegahnya lolos kembali ke luar angkasa. Tanpa efek rumah kaca alami ini, bumi akan menjadi terlalu dingin untuk dihuni.
        </p>
        <p>
          Namun, aktivitas manusia, terutama sejak Revolusi Industri, telah meningkatkan konsentrasi gas-gas ini secara drastis, menyebabkan "efek rumah kaca yang diperkuat" dan memicu pemanasan global.
        </p>
        <p>Gas rumah kaca utama yang menjadi perhatian meliputi:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 marker:text-emerald-500">
            <li><strong>Karbon Dioksida (CO2):</strong> Berasal dari pembakaran bahan bakar fosil (batu bara, minyak, gas), deforestasi, dan proses industri.</li>
            <li><strong>Metana (CH4):</strong> Berasal dari sektor pertanian (termasuk peternakan), tempat pembuangan sampah, dan produksi bahan bakar fosil.</li>
            <li><strong>Dinitrogen Oksida (N2O):
              </strong> Berasal dari praktik pertanian (penggunaan pupuk nitrogen) dan pembakaran bahan bakar fosil.
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DefinisiGRK;