"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();

  return (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link> { path === '/' ? '🔥' : null }
      </li>
      <li>
        <Link href="/about-us">Abou Us</Link> { path === '/about-us' ? '🔥' : null }
      </li>
    </ul>
  </nav>
  );
}