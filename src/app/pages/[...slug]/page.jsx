"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

export default function DynamicPage() {
  const params = useParams();
  const pageName = params.slug[params.slug.length - 1];
  
  // Dynamically import the page component from the Pages directory
  const PageComponent = dynamic(
    () => import(`@/Pages/${pageName}`).catch(() => {
      return () => (
        <div className="p-8">
          <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
          <p className="mt-4">The requested page could not be loaded.</p>
        </div>
      );
    }),
    {
      loading: () => (
        <div className="p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ),
      ssr: false
    }
  );

  return <PageComponent />;
}
