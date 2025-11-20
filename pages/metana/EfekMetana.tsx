import React from 'react';

const EfekMetana: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Efek & Potensi Gas Metana</h3>
      <div className="text-gray-600 space-y-4">
        <p>
          Meskipun sering dibayangi oleh Karbon Dioksida (CO2), metana memiliki peran unik dan signifikan dalam perubahan iklim.
        </p>
        <div>
          <h4 className="font-semibold text-gray-700">Dampak Jangka Pendek yang Kuat</h4>
          <p>
            Metana bertanggung jawab atas sekitar 30% dari pemanasan global saat ini. Karena potensinya yang tinggi dalam memerangkap panas, peningkatan konsentrasi metana dapat dengan cepat menaikkan suhu global. Ini menjadikannya target penting untuk mitigasi iklim jangka pendek.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Pembentukan Ozon Troposferik</h4>
          <p>
            Di atmosfer, metana bereaksi secara kimia untuk membentuk ozon di lapisan troposfer (ozon "jahat"). Ozon ini adalah polutan udara berbahaya yang dapat merusak kesehatan manusia dan tanaman, serta juga merupakan gas rumah kaca.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Peluang Mitigasi Cepat</h4>
          <p>
            Karena masa hidupnya yang singkat, pengurangan emisi metana akan menurunkan konsentrasinya di atmosfer dengan cepat. Tindakan yang diambil hari ini untuk memotong emisi metana akan memberikan manfaat iklim yang terasa dalam beberapa dekade mendatang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EfekMetana;