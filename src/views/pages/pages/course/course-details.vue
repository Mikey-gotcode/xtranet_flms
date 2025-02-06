<template>
  <page-header></page-header>
  <course-details></course-details>
  <inner-page></inner-page>
  <!-- Course Content -->
  <section class="page-content course-sec">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-2">
        <div class="lg:w-8/12 px-2">
          <!-- Overview -->
          <div class="card overview-sec">
            <div class="card-body">
              <h5 class="subs-title">Overview</h5>
              <h6>Course Description</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>

              <h6>What you'll learn</h6>
              <div class="flex flex-wrap -mx-2">
                <div class="md:w-6/12 px-2">
                  <ul>
                    <li>Become a UX designer.</li>
                    <li>You will be able to add UX designer to your CV</li>
                    <li>Become a UI designer.</li>
                    <li>Build & test a full website design.</li>
                    <li>Build & test a full mobile app.</li>
                  </ul>
                </div>
                <div class="md:w-6/12 px-2">
                  <ul>
                    <li>Learn to design websites & mobile phone apps.</li>
                    <li>You'll learn how to choose colors.</li>
                    <li>Prototype your designs with interactions.</li>
                    <li>Export production ready assets.</li>
                    <li>All the techniques used by UX professionals</li>
                  </ul>
                </div>
              </div>
              <h6>Requirements</h6>
              <ul class="mb-0">
                <li>
                  You will need a copy of Adobe XD 2023 or above. A free trial
                  can be downloaded from Adobe.
                </li>
                <li>No previous design experience is needed.</li>
                <li class="mb-0">No previous Adobe XD skills are needed.</li>
              </ul>
            </div>
          </div>
          <!-- /Overview -->

          <!-- Course Content -->
          <div class="card content-sec">
            <div class="card-body">
              <div class="flex flex-wrap -mx-2">
                <div class="sm:w-6/12 px-2">
                  <h5 class="subs-title">Course Content</h5>
                </div>
                <div class="sm:w-6/12 px-2 tracking-tight-end">
                  <h6>{{ lecturesCount }} Lectures {{ totalDuration }}</h6>
                </div>
              </div>
              <div v-for="(section, index) in courseContent" :key="index" class="course-card">
                <h6 class="cou-title">
                  <a
                    class="collapsed"
                    data-bs-toggle="collapse"
                    :href="'#course' + index"
                    aria-expanded="false"
                  >
                    {{ section.title }}
                  </a>
                </h6>
                <div :id="'course' + index" class="card-collapse collapse">
                  <ul>
                    <li v-for="(lecture, lectureIndex) in section.lectures" :key="lectureIndex">
                      <p>
                        <img
                          src="@/assets/img/icon/play.svg"
                          alt=""
                          class="me-2"
                        />
                        {{ lecture.name }}
                      </p>
                      <div>
                        <a href="javascript:;">Preview</a>
                        <span>{{ lecture.duration }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- /Course Content -->

          <!-- Instructor -->
          <div v-for="instructor in instructors" :key="instructor.name" class="card instructor-sec">
            <div class="card-body">
              <h5 class="subs-title">About the instructor</h5>
              <div class="instructor-wrap">
                <div class="about-instructor">
                  <div class="abt-instructor-img">
                    <router-link to="/instructor/instructor-profile">
                      <img :src="instructor.image" alt="img" class="img-fluid"/>
                    </router-link>
                  </div>
                  <div class="instructor-detail">
                    <h5>
                      <router-link to="/instructor/instructor-profile">{{ instructor.name }}</router-link>
                    </h5>
                    <p>{{ instructor.role }}</p>
                  </div>
                </div>
                <div class="rating">
                  <i v-for="i in 5" :key="i" :class="{'fas fa-star filled me-1': i <= instructor.rating, 'fas fa-star me-1': i > instructor.rating}"></i>
                  <span class="inline-block average-rating">{{ instructor.rating }} Instructor Rating</span>
                </div>
              </div>
              <div class="course-info flex items-center">
                <div class="cou-info">
                  <img src="@/assets/img/icon/play.svg" alt="" />
                  <p>{{ instructor.courses }} Courses</p>
                </div>
                <div class="cou-info">
                  <img src="@/assets/img/icon/icon-01.svg" alt="" />
                  <p>{{ instructor.lessons }}+ Lessons</p>
                </div>
                <div class="cou-info">
                  <img src="@/assets/img/icon/icon-02.svg" alt="" />
                  <p>{{ instructor.duration }}</p>
                </div>
                <div class="cou-info">
                  <img src="@/assets/img/icon/people.svg" alt="" />
                  <p>{{ instructor.students.toLocaleString() }} students enrolled</p>
                </div>
              </div>
              <p>{{ instructor.bio }}</p>
              <p>Skills: {{ instructor.skills.join(', ') }}</p>
              <p>Available for:</p>
              <ul>
                <li v-for="(option, index) in instructor.availability" :key="index">{{ option }}</li>
              </ul>
            </div>
          </div>
          <!-- /Instructor -->

          <!-- Reviews -->
          <div class="card review-sec" v-for="review in reviews" :key="review.id">
            <div class="card-body">
              <h5 class="subs-title">Reviews</h5>
              <div class="instructor-wrap">
                <div class="about-instructor">
                  <div class="abt-instructor-img">
                    <router-link to="/instructor/instructor-profile">
                      <img :src="review.imageUrl" alt="img" class="img-fluid" />
                    </router-link>
                  </div>
                  <div class="instructor-detail">
                    <h5>
                      <router-link to="/instructor/instructor-profile">{{ review.instructorName }}</router-link>
                    </h5>
                    <p>{{ review.instructorRole }}</p>
                  </div>
                </div>
                <div class="rating">
                  <i v-for="star in 5" :key="star" class="fas fa-star" :class="{ 'filled': star <= review.rating }"></i>
                  <span class="inline-block average-rating">{{ review.rating }} Instructor Rating</span>
                </div>
              </div>
              <p class="rev-info">{{ review.reviewText }}</p>
              <a href="javascript:;" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm-reply">
                <i class="feather-corner-up-left"></i> Reply
              </a>
            </div>
          </div>
          <!-- /Reviews -->

          <!-- Comment -->
          <div class="card comment-sec">
            <div class="card-body">
              <h5 class="subs-title">Post A comment</h5>
              <form>
                <div class="flex flex-wrap -mx-2">
                  <div class="md:w-6/12 px-2">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div class="md:w-6/12 px-2 mb-3">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group mb-3">
                  <textarea
                    rows="4"
                    class="form-control"
                    placeholder="Your Comments"
                  ></textarea>
                </div>
                <div class="submit-section">
                  <button class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm submit-inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <!-- /Comment -->
        </div>

        <div class="lg:w-4/12 px-2">
          <div class="sidebar-sec">
            <!-- Video -->
            <div class="video-sec vid-bg">
              <div class="card">
                <div class="card-body">
                  <a
                    href="https://www.youtube.com/embed/1trvO6dqQUI"
                    class="video-thumbnail"
                    data-fancybox=""
                  >
                    <div class="play-icon">
                      <i class="fa-solid fa-play"></i>
                    </div>
                    <img class="" src="@/assets/img/video.jpg" alt="" />
                  </a>
                  <div class="video-details">
                    <div class="course-fee">
                      <h2>FREE</h2>
                      <p><span>$99.00</span> 50% off</p>
                    </div>
                    <div class="flex flex-wrap -mx-2 gx-2">
                      <div class="md:w-6/12 px-2">
                        <router-link
                          to="course-wishlist"
                          class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm-wish w-full"
                          ><i class="feather-heart"></i> Add to
                          Wishlist</router-link
                        >
                      </div>
                      <div class="md:w-6/12 px-2">
                        <a href="javascript:;" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm-wish w-full"
                          ><i class="feather-share-2"></i> Share</a
                        >
                      </div>
                    </div>
                    <router-link
                      to="/pages/checkout"
                      class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm-enroll w-full"
                      >Enroll Now</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- /Video -->

            <!-- Include -->
            <div class="card include-sec">
              <div class="card-body">
                <div class="cat-title">
                  <h4>Includes</h4>
                </div>
                <ul>
                  <li>
                    <img
                      src="@/assets/img/icon/import.svg"
                      class="me-2"
                      alt=""
                    />
                    11 hours on-demand video
                  </li>
                  <li>
                    <img src="@/assets/img/icon/play.svg" class="me-2" alt="" />
                    69 downloadable resources
                  </li>
                  <li>
                    <img src="@/assets/img/icon/key.svg" class="me-2" alt="" />
                    Full lifetime access
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/mobile.svg"
                      class="me-2"
                      alt=""
                    />
                    Access on mobile and TV
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/cloud.svg"
                      class="me-2"
                      alt=""
                    />
                    Assignments
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/teacher.svg"
                      class="me-2"
                      alt=""
                    />
                    Certificate of Completion
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Include -->

            <!-- Features -->
            <div class="card feature-sec">
              <div class="card-body">
                <div class="cat-title">
                  <h4>Includes</h4>
                </div>
                <ul>
                  <li>
                    <img
                      src="@/assets/img/icon/users.svg"
                      class="me-2"
                      alt=""
                    />
                    Enrolled: <span>32 students</span>
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/timer.svg"
                      class="me-2"
                      alt=""
                    />
                    Duration: <span>20 hours</span>
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/chapter.svg"
                      class="me-2"
                      alt=""
                    />
                    Chapters: <span>15</span>
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/video.svg"
                      class="me-2"
                      alt=""
                    />
                    Video:<span> 12 hours</span>
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icon/chart.svg"
                      class="me-2"
                      alt=""
                    />
                    Level: <span>Beginner</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Features -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Pricing Plan -->
  <layouts-1></layouts-1>
</template>


<script>
import courseContentData from "@/assets/json/course-content.json"; // Path to your JSON file
import instructorsData from "@/assets/json/instructors.json"; // Make sure the path is correct
import reviewsData from "@/assets/json/reviews2.json";


export default {
  data() {
    return {
      courseContent: courseContentData.courseContent,
      instructors: instructorsData,
      reviews: reviewsData 
    };
  },
  computed: {
    lecturesCount() {
      return this.courseContent.reduce((count, section) => count + section.lectures.length, 0);
    },
    totalDuration() {
      // Calculate total duration based on all lectures (example format: "10:56:11")
      let totalSeconds = 0;
      this.courseContent.forEach(section => {
        section.lectures.forEach(lecture => {
          const timeParts = lecture.duration.split(":").map(Number);
          totalSeconds += timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
        });
      });

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>
