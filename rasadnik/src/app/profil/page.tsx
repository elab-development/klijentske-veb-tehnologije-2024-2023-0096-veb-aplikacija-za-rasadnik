"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilPage() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push('/prijava');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/';
    
    
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Zdravo, {user?.name}</h1>
      
      {/* Ovde će ići lista želja, plan sadnje itd... */}

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
      >
        Odjavi se
      </button>
    </div>
  );
}
