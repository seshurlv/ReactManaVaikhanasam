import React, { Suspense } from 'react';
import PageLoader from 'components/Loading/PageLoader.js';

// Lazy load page components
const AshramamPage = React.lazy(() => import('./AshramamPage.js'));
const AshramamDonorsPage = React.lazy(() => import('./AshramamDonorsPage.js'));
const BooksPage = React.lazy(() => import('./BooksPage.js'));
const ContactUsPage = React.lazy(() => import('./ContactUsPage.js'));
const MatrimonyPage = React.lazy(() => import('./MatrimonyPage.js'));
const DirectoryPage = React.lazy(() => import('./DirectoryPage.js'));
const PhotoGalleryPage = React.lazy(() => import('./PhotoGalleryPage.js'));
const DocumentsPage = React.lazy(() => import('./DocumentsPage.js'));
const VideoGalleryPage = React.lazy(() => import('./VideoGalleryPage.js'));
const VaikhanasaPrabhaPage = React.lazy(() => import('./VaikhanasaPrabhaPage.js'));
const SVMMPage = React.lazy(() => import('./SVMMPage.js'));
const Newspage = React.lazy(() => import('./NewsPage.js'));
const PurohitPage = React.lazy(() => import('./PurohitPage.js'));

// Wrapper components with loading fallback
export const LazyAshramamPage = () => (
  <Suspense fallback={<PageLoader />}>
    <AshramamPage />
  </Suspense>
);

export const LazyAshramamDonorsPage = () => (
  <Suspense fallback={<PageLoader />}>
    <AshramamDonorsPage />
  </Suspense>
);

export const LazyBooksPage = () => (
  <Suspense fallback={<PageLoader />}>
    <BooksPage />
  </Suspense>
);

export const LazyContactUsPage = () => (
  <Suspense fallback={<PageLoader />}>
    <ContactUsPage />
  </Suspense>
);

export const LazyMatrimonyPage = () => (
  <Suspense fallback={<PageLoader />}>
    <MatrimonyPage />
  </Suspense>
);

export const LazyDirectoryPage = () => (
  <Suspense fallback={<PageLoader />}>
    <DirectoryPage />
  </Suspense>
);

export const LazyPhotoGalleryPage = () => (
  <Suspense fallback={<PageLoader />}>
    <PhotoGalleryPage />
  </Suspense>
);

export const LazyDocumentsPage = () => (
  <Suspense fallback={<PageLoader />}>
    <DocumentsPage />
  </Suspense>
);  

export const LazyVideoGalleryPage = () => (
  <Suspense fallback={<PageLoader />}>
    <VideoGalleryPage />
  </Suspense>
);

export const LazyVaikhanasaPrabhaPage = () => (
  <Suspense fallback={<PageLoader />}>
    <VaikhanasaPrabhaPage />
  </Suspense>
);

export const LazySVMMPage = () => (
  <Suspense fallback={<PageLoader />}>
    <SVMMPage />
  </Suspense>
);

export const LazyNewsPage = () => (
  <Suspense fallback={<PageLoader />}>
    <Newspage />
  </Suspense>
);  

export const LazyPurohitPage = () => (
  <Suspense fallback={<PageLoader />}>
    <PurohitPage />
  </Suspense>
);
// export const LazySvmmPage = () => (
//   <Suspense fallback={<PageLoader />}>
//     <SvmmPage />
//   </Suspense>
// );

// export const LazyPhotoGalleryPage = () => (
//   <Suspense fallback={<PageLoader />}>
//     <PhotoGalleryPage />
//   </Suspense>
// );

// export const LazyContactPage = () => (
//   <Suspense fallback={<PageLoader />}>
//     <ContactPage />
//   </Suspense>
// );