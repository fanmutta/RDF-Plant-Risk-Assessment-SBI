import { AssessmentSection } from './types';

// FIX: Added parentheses to correctly define the type for an array of objects.
// Due to type operator precedence, the original type was being parsed incorrectly.
// The correct type `(T & U)[]` ensures each object in the array has the correct shape.
export const INITIAL_FORM_SECTIONS: (Omit<AssessmentSection, 'items'> & { items: { id: string, text: string, isRepeatable?: boolean }[] })[] = [
  {
    title: '1. Housekeeping & Kebersihan',
    items: [
      { id: '1.1', text: 'Dinding & Ventilasi', isRepeatable: true },
      { id: '1.2', text: 'Jendela', isRepeatable: true },
      { id: '1.3', text: 'Pintu', isRepeatable: true },
      { id: '1.4', text: 'Lantai & Tangga', isRepeatable: true },
      { id: '1.5', text: 'Jalur Pejalan Kaki (Walkways)', isRepeatable: true },
      { id: '1.6', text: 'Area Umum & Fasilitas', isRepeatable: true },
      { id: '1.7', text: 'Kebersihan Alat Berat', isRepeatable: true },
      { id: '1.8', text: 'Kontrol Debu', isRepeatable: true },
    ],
  },
  {
    title: '2. Keselamatan & Kesehatan Kerja',
    items: [
      { id: '2.1', text: 'Penggunaan APD', isRepeatable: true },
      { id: '2.2', text: 'Rambu & Marka Keselamatan', isRepeatable: true },
      { id: '2.3', text: 'Titik Kumpul (Assembly Point)', isRepeatable: true },
      { id: '2.4', text: 'P3K & Fasilitas Medis', isRepeatable: true },
      { id: '2.5', text: 'Penanganan Kebisingan', isRepeatable: true },
      { id: '2.6', text: 'Manajemen Lalu Lintas Kendaraan Berat', isRepeatable: true },
    ],
  },
  {
    title: '3. Manajemen Bahan & Produk',
    items: [
      { id: '3.1', text: 'Area Incoming Sampah/MSW', isRepeatable: true },
      { id: '3.2', text: 'Feeding Facility', isRepeatable: true },
      { id: '3.3', text: 'RDF Proses', isRepeatable: true },
      { id: '3.4', text: 'RDF Product', isRepeatable: true },
      { id: '3.5', text: 'RDF Storage', isRepeatable: true },
      { id: '3.6', text: 'Visual Kualitas Produk RDF', isRepeatable: true },
      { id: '3.7', text: 'Size (Ukuran)', isRepeatable: true },
      { id: '3.8', text: 'Moisture (Kelembaban)', isRepeatable: true },
      { id: '3.9', text: 'Penanganan Air Lindi (Leachate)', isRepeatable: true },
      { id: '3.10', text: 'Kontrol Kualitas & Laboratorium (Sample)', isRepeatable: true },
    ],
  },
  {
    title: '4. Kondisi Peralatan & Operasional',
    items: [
      { id: '4.1', text: 'Kondisi Mesin (Shredder, Conveyor)', isRepeatable: true },
      { id: '4.2', text: 'Sistem Proteksi Mesin (Guard, Interlock)', isRepeatable: true },
      { id: '4.3', text: 'Pengawasan Kondisi Mesin', isRepeatable: true },
      { id: '4.4', text: 'Sistem Proteksi Kebakaran', isRepeatable: true },
      { id: '4.5', text: 'Sistem Deteksi & Pemadaman Api Otomatis', isRepeatable: true },
    ],
  },
  {
    title: '5. Manajemen Lingkungan & Kepatuhan',
    items: [
      { id: '5.1', text: 'Sistem Pengelolaan Air Lindi (Leachate)', isRepeatable: true },
      { id: '5.2', text: 'Pengendalian Emisi Debu & Bau', isRepeatable: true },
      { id: '5.3', text: 'Pengelolaan Limbah B3 & Residu', isRepeatable: true },
      { id: '5.4', text: 'Kepatuhan Terhadap Izin Lingkungan', isRepeatable: true },
    ],
  },
  {
    title: '6. Kesiapan Tanggap Darurat',
    items: [
      { id: '6.1', text: 'Prosedur Tanggap Darurat (ERP)', isRepeatable: true },
      { id: '6.2', text: 'Sistem Alarm & Komunikasi Darurat', isRepeatable: true },
      { id: '6.3', text: 'Pelatihan & Simulasi Tanggap Darurat', isRepeatable: true },
      { id: '6.4', text: 'Ketersediaan APAR & Hydrant', isRepeatable: true },
    ],
  },
];
