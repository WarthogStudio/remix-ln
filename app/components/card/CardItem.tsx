import { Link } from '@remix-run/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~ui/card';

type Props = {
  href: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  price: number;
};

export default function CardItem({
  href,
  title,
  description,
  src,
  alt,
  price,
}: Props) {
  return (
    <Link to={href}>
      <Card className='w-[350px]'>
        <CardHeader>
          <img src={src} alt={alt} width={150} height={150}/>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{price}</CardContent>
        <CardFooter className='flex justify-between'></CardFooter>
      </Card>
    </Link>
  );
}
