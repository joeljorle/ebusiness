import { Moment } from 'moment';
import { Tagcolor } from 'app/shared/model/enumerations/tagcolor.model';

export interface ITour {
  id?: number;
  categoryid?: number;
  userid?: number;
  productid?: number;
  evenementid?: number;
  slug?: string;
  name?: string;
  islock?: boolean;
  lockdelay?: Moment;
  about?: any;
  title?: string;
  tag?: string;
  tagcolor?: Tagcolor;
  postalcode?: string;
  phones?: string;
  website?: string;
  facebook?: string;
  twitter?: string;
  gplus?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
  url?: string;
  position?: number;
  othercontacts?: any;
  otherfields?: any;
  createdat?: Moment;
  updatedat?: Moment;
  filesTourid?: string;
  filesId?: number;
  currencyId?: number;
  locationId?: number;
  categoryId?: number;
  productId?: number;
  evenementId?: number;
}

export class Tour implements ITour {
  constructor(
    public id?: number,
    public categoryid?: number,
    public userid?: number,
    public productid?: number,
    public evenementid?: number,
    public slug?: string,
    public name?: string,
    public islock?: boolean,
    public lockdelay?: Moment,
    public about?: any,
    public title?: string,
    public tag?: string,
    public tagcolor?: Tagcolor,
    public postalcode?: string,
    public phones?: string,
    public website?: string,
    public facebook?: string,
    public twitter?: string,
    public gplus?: string,
    public linkedin?: string,
    public instagram?: string,
    public email?: string,
    public url?: string,
    public position?: number,
    public othercontacts?: any,
    public otherfields?: any,
    public createdat?: Moment,
    public updatedat?: Moment,
    public filesTourid?: string,
    public filesId?: number,
    public currencyId?: number,
    public locationId?: number,
    public categoryId?: number,
    public productId?: number,
    public evenementId?: number
  ) {
    this.islock = this.islock || false;
  }
}
