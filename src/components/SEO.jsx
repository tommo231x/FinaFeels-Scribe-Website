/*
  COMPONENT: SEO
  PURPOSE: Reusable component for per-page meta tags using react-helmet-async.
  USAGE: Import and add <SEO title="..." description="..." /> to each page.
*/
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'FinaFeels Scribe';
const BASE_URL = 'https://finasscribe.com';
const DEFAULT_IMAGE = `${BASE_URL}/social-card-v2.png`;

const SEO = ({
    title,
    description,
    path = '',
    image = DEFAULT_IMAGE,
    type = 'website',
    noIndex = false,
    schema = null
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `Free Dictation Software for Windows | Offline Speech-to-Text - ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${path}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional Structured Data (page-specific) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
