export type ProjectType = {
  icon: any;
  title: string;
  header: string;
  company: string;
  date: string;
  aboutApp: string;
  jobDescriptionTitle: string;
  jobDescription: string[];
  techTitle: string;
  techUsed: string[];
};

export type coursesFreeType = {
  title: string;
  subTitle: string;
  objective: string;
  targetAudience: string;
  cover: any;
  time: string;
  totalStudents: string;
  releasedDate: string;
};

export type fontType = {
  title: string;
  about: string;
  font: string;
  ownedBy: string;
};

export type articleType = {
  image: string;
  title: string;
  intro: string;
  body: {
    innerTitle: string;
    desc: string;
    eg: string;
  }[];
};
