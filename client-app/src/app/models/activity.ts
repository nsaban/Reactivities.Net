import { Profile } from "./profile";

export interface IActivity {
  id: string;
  title: string;
  description: string;
  category: string;
  date: Date | null;
  city: string;
  venue: string;
  hostUsername: string;
  isCancelled: boolean;
  isGoing: boolean;
  isHost: boolean;
  host?: Profile;
  attendees?: Profile[];
}

export class Activity implements IActivity {
  constructor(init: ActivityFormValues) {
    this.id = init.id!;
    this.title = init.title;
    this.description = init.description;
    this.date = init.date;
    this.category = init.category;
    this.venue = init.venue;
    this.city = init.city;

  }

  id: string;
  title: string;
  description: string;
  category: string;
  date: Date | null;
  city: string;
  venue: string;
  hostUsername: string = '';
  isCancelled: boolean = false;
  isGoing: boolean = false;
  isHost: boolean = false;
  host?: Profile;
  attendees?: Profile[];
}

export class ActivityFormValues {
  id?: string = undefined;
  title: string = '';
  description: string = '';
  category: string = '';
  date: Date | null = null;
  city: string = '';
  venue: string = '';

  constructor(activity?: ActivityFormValues) {
    if (activity) {
      this.id = activity?.id;
      this.title = activity.title;
      this.description = activity.description;
      this.category = activity.category;
      this.date = activity.date;
      this.city = activity.city;
      this.venue = activity.venue;
    }    
  }
}
