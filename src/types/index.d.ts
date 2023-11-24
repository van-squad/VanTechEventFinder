export interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  website: string;
}

export interface EventList {
  id: string;
  title: string;
  eventUrl: string;
  description: string;
  venue?: {
    id?: string;
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
  } | null;
  imageUrl: string;
  imageId: string;
  dateTime: string;
}
