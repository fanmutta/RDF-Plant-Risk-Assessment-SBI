import React, { useMemo } from 'react';
import type { AssessmentSection } from '../types';

interface SummaryDashboardProps {
  sections: AssessmentSection[];
  filterOn: boolean;
  onFilterToggle: (value: boolean) => void;
}

const SummaryDashboard: React.FC<SummaryDashboardProps> = ({ sections, filterOn, onFilterToggle }) => {
  const stats = useMemo(() => {
    let ok = 0;
    let notOk = 0;
    let na = 0;
    let notFilled = 0;
    let total = 0;

    sections.forEach(section => {
      section.items.forEach(item => {
        item.instances.forEach(instance => {
          total++;
          switch (instance.status) {
            case 'OK':
              ok++;
              break;
            case 'Not OK':
              notOk++;
              break;
            case 'N/A':
              na++;
              break;
            default:
              notFilled++;
              break;
          }
        });
      });
    });

    return { ok, notOk, na, notFilled, total };
  }, [sections]);

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ringkasan Penilaian</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
        <div className="bg-green-100 text-green-800 p-3 rounded-lg">
          <p className="text-2xl font-bold">{stats.ok}</p>
          <p className="text-sm">OK</p>
        </div>
        <div className="bg-red-100 text-red-800 p-3 rounded-lg">
          <p className="text-2xl font-bold">{stats.notOk}</p>
          <p className="text-sm">Not OK</p>
        </div>
        <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
          <p className="text-2xl font-bold">{stats.na}</p>
          <p className="text-sm">N/A</p>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg">
          <p className="text-2xl font-bold">{stats.notFilled}</p>
          <p className="text-sm">Belum Diisi</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <label htmlFor="filterToggle" className="text-sm font-medium text-gray-700">
          Tampilkan hanya item 'Not OK'
        </label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input 
                type="checkbox" 
                name="filterToggle" 
                id="filterToggle" 
                checked={filterOn}
                onChange={(e) => onFilterToggle(e.target.checked)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label htmlFor="filterToggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <style>{`
            .toggle-checkbox:checked {
                right: 0;
                border-color: #48bb78;
            }
            .toggle-checkbox:checked + .toggle-label {
                background-color: #48bb78;
            }
        `}</style>
      </div>
    </div>
  );
};

export default SummaryDashboard;
