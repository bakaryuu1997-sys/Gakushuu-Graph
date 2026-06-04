import { aiPassportCourse } from './ai-passport';
import { frontendCourse } from './frontend';
import { itPassportCourse } from './it-passport';
import { sqlCourse } from './sql';
import { brseCourse } from './brse';
import { fundamentalInfoCourse } from './fundamental-info';
import { linuxCourse } from './linux';
import { pythonCourse } from './python';
import type { CourseConfig, CourseId, CourseTheme } from './types';
import { enhanceCourseForV98 } from './v98LessonContentAudit';
import { enhanceCourseForV99 } from './v99LessonQuality';
import { enhanceCourseForV101 } from './v101LessonQuality';
import { enhanceCourseForV102V103 } from './v102v103LessonQuality';
import { enhanceCourseForV104 } from './v104WrittenLessonPack';

export type { CourseConfig, CourseId, CourseTheme } from './types';

const baseCourses: CourseConfig[] = [aiPassportCourse, fundamentalInfoCourse, pythonCourse, frontendCourse, sqlCourse, brseCourse, linuxCourse, itPassportCourse];
export const courses: CourseConfig[] = baseCourses.map(enhanceCourseForV98).map(enhanceCourseForV99).map(enhanceCourseForV101).map(enhanceCourseForV102V103).map(enhanceCourseForV104);
export const defaultCourseId: CourseId = 'ai-passport';
export const getCourseById = (id: CourseId): CourseConfig => courses.find((course) => course.id === id) ?? courses[0];
