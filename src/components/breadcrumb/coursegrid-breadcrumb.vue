<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar bg-gray-100 py-4">
      <div class="container mx-auto px-4">
        <div class="w-full">
          <div class="breadcrumb-list">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb flex space-x-2 text-sm text-gray-500">
                <li class="breadcrumb-item">
                  <router-link to="/home/" class="text-blue-500 hover:text-blue-700">Home</router-link>
                </li>
                <li class="breadcrumb-item">Courses</li>
                <li class="breadcrumb-item active text-gray-700" aria-current="page">All Courses</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
  </template>
  