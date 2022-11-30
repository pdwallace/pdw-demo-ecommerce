// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail';
import annotationLinkExternal from './annotations/linkExternal';
import annotationLinkInternal from './annotations/linkInternal';
import annotationProduct from './annotations/product';

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationProduct,
];

// Document types
import collection from './documents/collection';
import colorTheme from './documents/colorTheme';
import guide from './documents/guide';
import material from './documents/material';
import page from './documents/page';
import product from './documents/product';
import productVariant from './documents/productVariant';
import person from './documents/person';

const documents = [
  collection,
  colorTheme,
  guide,
  material,
  page,
  product,
  productVariant,
  person,
];

// Singleton document types
import home from './singletons/home';
import settings from './singletons/settings';

const singletons = [home, settings];

// Block content
import body from './blocks/body';
import simpleBlockContent from './blocks/simpleBlockContent';

const blocks = [body, simpleBlockContent];

// Object types
import creator from './objects/creator';
import customProductOptionColor from './objects/customProductOption/color';
import customProductOptionSize from './objects/customProductOption/size';
import faqs from './objects/faqs';
import imageWithProductHotspots from './objects/imageWithProductHotspots';
import linkExternal from './objects/linkExternal';
import linkInternal from './objects/linkInternal';
import heroCollection from './objects/hero/collection';
import heroHome from './objects/hero/home';
import heroPage from './objects/hero/page';
import moduleAccordion from './objects/module/accordion';
import moduleCallout from './objects/module/callout';
import moduleCallToAction from './objects/module/callToAction';
import moduleCollection from './objects/module/collection';
import moduleGrid from './objects/module/grid';
import moduleImage from './objects/module/image';
import moduleImages from './objects/module/images';
import moduleInstagram from './objects/module/instagram';
import moduleProduct from './objects/module/product';
import moduleProducts from './objects/module/products';
import moduleTaggedProducts from './objects/module/taggedProducts';
import placeholderString from './objects/placeholderString';
import productHotspots from './objects/productHotspots';
import productOption from './objects/productOption';
import productWithVariant from './objects/productWithVariant';
import proxyString from './objects/proxyString';
import seoHome from './objects/seo/home';
import seoPage from './objects/seo/page';
import seoShopify from './objects/seo/shopify';
import shopifyCollection from './objects/shopifyCollection';
import shopifyCollectionRule from './objects/shopifyCollectionRule';
import shopifyProduct from './objects/shopifyProduct';
import shopifyProductVariant from './objects/shopifyProductVariant';

const objects = [
  creator,
  customProductOptionColor,
  customProductOptionSize,
  faqs,
  imageWithProductHotspots,
  linkExternal,
  linkInternal,
  heroCollection,
  heroHome,
  heroPage,
  moduleAccordion,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  moduleImage,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  moduleTaggedProducts,
  placeholderString,
  productHotspots,
  productOption,
  productWithVariant,
  proxyString,
  seoHome,
  seoPage,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
];

export const schemaTypes = [
  ...annotations,
  ...documents,
  ...singletons,
  ...objects,
  ...blocks,
];
