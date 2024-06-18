export const TBA_API_URL = "https://www.thebluealliance.com/api/v3";

function buildAuthedUrl(endpoint: string) {
  return `${TBA_API_URL}${endpoint}?X-TBA-Auth-Key=${process.env.NEXT_PUBLIC_TBA_API_KEY}`;
}

export function EventListApiUrl(year: string) {
  return buildAuthedUrl(`/events/${year}`);
}
export function EventViewApiUrl(eventKey: string) {
  return buildAuthedUrl(`/event/${eventKey}`);
}
