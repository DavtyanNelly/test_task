export interface IOrganization {
  id: number;
  title: string;
  image: string;
  licenses: ILicense[];
}

export interface ILicense {
  id: number;
  title: string;
  inUse: number;
  assigned: number;
}
