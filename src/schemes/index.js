import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})
const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})

// const StuLibClass = new schema.Entity('StuLibClass', {}, {
//   idAttribute: 'id'
// });
// const StuLibTeacher = new schema.Entity('StuLibTeacher',{},{
//   idAttribute:'id'
// })
const LessonInfo = new schema.Entity('LessonInfo', {
   classInfo:classes,
   teacherInfo:teacher
}, {
  idAttribute: 'id'
});
export const SATISFILEDLIST = [ satisfiled ];
export const LESSONINFO = [ LessonInfo ];