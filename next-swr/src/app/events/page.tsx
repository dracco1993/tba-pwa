"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useSWR from "swr";

import { EventListApiUrl } from "../../lib/constants";

export default function Events() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(EventListApiUrl("2024"), fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">FIRST Robotics Competition Events</h1>
      <h4 className="text-lg font-semibold">{data.length} Events</h4>

      <Table>
        <TableCaption>Week 1</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Event</TableHead>
            <TableHead className="text-right">Webcast</TableHead>
            <TableHead className="text-right">Dates</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((event) => (
            <TableRow key={event.key}>
              <TableCell className="font-medium">
                <a href={`/event/${event.key}`}>{event.name}</a>
                {event.city ? (
                  <span className="block text-sm font-normal text-gray-500">
                    {event.city}, {event.state_prov}, {event.country}
                  </span>
                ) : null}
              </TableCell>
              <TableCell className="text-right">
                {event.webcasts.length}
              </TableCell>
              <TableCell className="text-right">
                {event.start_date} - {event.end_date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
