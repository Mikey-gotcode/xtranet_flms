<template>
  <!-- Blog Sidebar -->
  <div class="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
    <div class="stickysidebar">
      <!-- Search -->
      <div class="card search-widget blog-search blog-widget">
        <div class="card-body">
          <form class="search-form">
            <div class="input-group">
              <input type="text" placeholder="Search..." class="form-control" />
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- /Search -->

      <!-- Latest Posts -->
      <div class="card post-widget blog-widget">
        <div class="card-header">
          <h4 class="card-title">Recent Posts</h4>
        </div>
        <div class="card-body">
          <ul class="latest-posts">
            <li>
              <div class="post-thumb">
                <router-link to="/blog/blog-details">
                  <img class="img-fluid" src="@/assets/img/blog/blog-01.jpg" alt="" />
                </router-link>
              </div>
              <div class="post-info">
                <h4>
                  <router-link to="/blog/blog-details"
                    >Learn Webs Applications Development from Experts</router-link
                  >
                </h4>
                <p>
                  <img class="img-fluid" src="@/assets/img/icon/icon-22.svg" alt="" />Jun
                  14, 2023
                </p>
              </div>
            </li>
            <li>
              <div class="post-thumb">
                <router-link to="/blog/blog-details">
                  <img class="img-fluid" src="@/assets/img/blog/blog-02.jpg" alt="" />
                </router-link>
              </div>
              <div class="post-info">
                <h4>
                  <router-link to="/blog/blog-details"
                    >Expand Your Career Opportunities With Python</router-link
                  >
                </h4>
                <p>
                  <img class="img-fluid" src="@/assets/img/icon/icon-22.svg" alt="" /> 3
                  Mar 2023
                </p>
              </div>
            </li>
            <li>
              <div class="post-thumb">
                <router-link to="/blog/blog-details">
                  <img class="img-fluid" src="@/assets/img/blog/blog-03.jpg" alt="" />
                </router-link>
              </div>
              <div class="post-info">
                <h4>
                  <router-link to="/blog/blog-details"
                    >Complete PHP Programming Career Guideline</router-link
                  >
                </h4>
                <p>
                  <img class="img-fluid" src="@/assets/img/icon/icon-22.svg" alt="" /> 3
                  Mar 2023
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Latest Posts -->

      <!-- Categories -->
      <div class="card category-widget blog-widget">
        <div class="card-header">
          <h4 class="card-title">Categories</h4>
        </div>
        <div class="card-body">
          <ul class="categories">
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> Business
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> Courses
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> Education
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> Graphics Design
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> Programming
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> Web Design
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Categories -->

      <!-- Archives Categories -->
      <div class="card category-widget blog-widget">
        <div class="card-header">
          <h4 class="card-title">Archives</h4>
        </div>
        <div class="card-body">
          <ul class="categories">
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> January 2023
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> February 2023
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="fas fa-angle-right"></i> April 2023
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Archives Categories -->

      <!-- Tags -->
      <div class="card tags-widget blog-widget tags-card">
        <div class="card-header">
          <h4 class="card-title">Latest Tags</h4>
        </div>
        <div class="card-body">
          <ul class="tags">
            <li><a href="javascript:void(0);" class="tag">HTML</a></li>
            <li><a href="javascript:void(0);" class="tag">Java Script</a></li>
            <li><a href="javascript:void(0);" class="tag">Css</a></li>
            <li><a href="javascript:void(0);" class="tag">Jquery</a></li>
            <li><a href="javascript:void(0);" class="tag">Java</a></li>
            <li><a href="javascript:void(0);" class="tag">React</a></li>
          </ul>
        </div>
      </div>
      <!-- /Tags -->
    </div>
  </div>
  <!-- /Blog Sidebar -->
</template>
