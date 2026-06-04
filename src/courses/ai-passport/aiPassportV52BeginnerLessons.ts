import { aiPassportV52BusinessLessons } from './aiPassportV52BeginnerLessons.business';
import { aiPassportV52InfraLessons } from './aiPassportV52BeginnerLessons.infra';
import { aiPassportV52MlLessons } from './aiPassportV52BeginnerLessons.ml';

export const aiPassportV52BeginnerLessons = [...aiPassportV52MlLessons, ...aiPassportV52BusinessLessons, ...aiPassportV52InfraLessons];
