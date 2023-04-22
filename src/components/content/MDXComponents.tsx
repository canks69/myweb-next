import Image from 'next/image';

import GithubCard from '@/components/content/card/GithubCard';
import CustomCode, { Pre } from '@/components/content/CustomCode';
import SplitImage, { Split } from '@/components/content/SplitImage';
import TweetCard from '@/components/content/TweetCard';
import CustomLink from '@/components/links/CustomLink';
import NextImage from '@/components/NextImage';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
  NextImage,
  SplitImage,
  Split,
  TweetCard,
  GithubCard,
};

export default MDXComponents;
