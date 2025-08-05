'use client';
import { useState } from 'react';

export type PlantType = 'sve'|'ukrasne'|'zacinske'|'vocne';
export type SunExposure = 'sve'|'sunce'|'polusenka'|'senka';
export type Maintenance = 'sve'|'nisko'|'umereno'|'zahtevno';

export interface Filters {
  type: PlantType;
  sun: SunExposure;
  maintenance: Maintenance;
}

export default function PlantFilter({ onChange }: { onChange: (f: Filters) => void }) {
  const [f, setF] = useState<Filters>({ type:'sve', sun:'sve', maintenance:'sve' });
  const update = (partial: Partial<Filters>) => {
    const next = { ...f, ...partial };
    setF(next);
    onChange(next);
  };

  return (
    <section className="bg-[#eef1df] rounded-md p-4 mb-6 text-[15px] text-primary font-inter">
      <h2 className="text-lg font-bold mb-3">Pretraži po</h2>
      {/* Tip sadnice */}
      <div className="mb-3">
        <span className="font-medium mr-2">Tip sadnice:</span>
        {[
          ['Sve','sve'],['Ukrasne Sadnice','ukrasne'],
          ['Začinske Sadnice','zacinske'],['Voćne Sadnice','vocne']
        ].map(([label, val]) => (
          <label key={val} className="mr-4">
            <input
              type="radio" name="tip" className="mr-1"
              checked={f.type===val} onChange={()=>update({ type: val as PlantType })}
            />
            {label}
          </label>
        ))}
      </div>
      {/* Osunčanost */}
      <div className="mb-3">
        <span className="font-medium mr-2">Uslovi osunčanosti:</span>
        {[
          ['Sve','sve'],['Sunce','sunce'],
          ['Polusenka','polusenka'],['Senka','senka']
        ].map(([label,val])=>(
          <label key={val} className="mr-4">
            <input
              type="radio" name="sun" className="mr-1"
              checked={f.sun===val} onChange={()=>update({ sun: val as SunExposure })}
            />
            {label}
          </label>
        ))}
      </div>
      {/* Održavanje */}
      <div>
        <span className="font-medium mr-2">Zahtevi za održavanje:</span>
        {[
          ['Sve','sve'],['Nisko Održavanje','nisko'],
          ['Umereno Održavanje','umereno'],['Zahtevno Održavanje','zahtevno']
        ].map(([label,val])=>(
          <label key={val} className="mr-4">
            <input
              type="radio" name="maint" className="mr-1"
              checked={f.maintenance===val} onChange={()=>update({ maintenance: val as Maintenance })}
            />
            {label}
          </label>
        ))}
      </div>
    </section>
  );
}
