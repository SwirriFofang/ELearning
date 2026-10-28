

import Breadcrumb from "../../Component/CourseComponents/Breadcrumb/Breadcrumb";
import { teachers } from "../../Component/data/teachers";
import TeacherCard from "../../Component/teachercomponents/TeacherCard/TeacherCard";
import TeacherIntro from "../../Component/teachercomponents/TeacherIntro/TeacherIntro";

export default function Teacher() {
  return (
    <main className="container teacher-page">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Teacher' }]} />
      <TeacherIntro />

      <div className="teacher-grid">
        {teachers.map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </div>
    </main>
  )
}