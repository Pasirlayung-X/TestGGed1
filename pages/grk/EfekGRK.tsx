import React from 'react';

const EfekGRK: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Efek Peningkatan Gas Rumah Kaca</h3>
        <p className="text-gray-600 mb-4">
          Peningkatan konsentrasi GRK di atmosfer menyebabkan pemanasan global, yang memicu serangkaian dampak luas terhadap iklim dan ekosistem, termasuk pada sektor peternakan itu sendiri.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-emerald-500 font-bold mr-3 mt-1">✓</span>
            <span className="text-gray-700"><strong>Pemanasan Global:</strong> Peningkatan suhu rata-rata bumi, menyebabkan cuaca ekstrem seperti kekeringan, banjir, dan badai yang lebih sering dan intens.</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-500 font-bold mr-3 mt-1">✓</span>
            <span className="text-gray-700"><strong>Perubahan Pola Cuaca:</strong> Mengganggu siklus tanam, ketersediaan air bersih, dan dapat mempengaruhi kualitas serta kuantitas pakan ternak.</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-500 font-bold mr-3 mt-1">✓</span>
            <span className="text-gray-700"><strong>Kenaikan Permukaan Laut:</strong> Mencairnya gletser dan es di kutub menyebabkan kenaikan permukaan laut, mengancam wilayah pesisir.</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-500 font-bold mr-3 mt-1">✓</span>
            <span className="text-gray-700"><strong>Stres Panas pada Ternak:</strong> Suhu yang lebih tinggi dapat menyebabkan stres panas pada sapi, yang menurunkan produktivitas susu dan daging, serta meningkatkan kerentanan terhadap berbagai penyakit.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EfekGRK;