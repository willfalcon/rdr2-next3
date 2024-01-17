import Title from '@/components/Title';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Title h1>Checklists</Title>
      <div className="px-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <Link className="" href="/tracking">
                Tracking
              </Link>
            </CardTitle>
            <CardDescription>{/* <TrackingCount /> */}</CardDescription>
          </CardHeader>
        </Card>
        <Title>Craftables</Title>
        <Accordion type="multiple"></Accordion>
        <div className="flex flex-col gap-3 items-start">
          <Button variant="secondary">
            <Link className="" href="/all">
              All Materials
            </Link>
          </Button>
          <Button variant="secondary">
            <Link className="" href="/requests">
              Companion Item Requests
            </Link>
          </Button>
          <Button variant="secondary">
            <Link className="" href="/challenges">
              Challenges
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
