<template>
    <div class="text-center py-5">
      <h2>NEWS AND NOTICE</h2>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col" class="text-center">제목</th>
          <th scope="col" class="text-center">날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board,i) in bdata" :key="i" class="cursor">
          <th scope="row">{{bdata[i].idx + 1}}</th>
          <td>{{bdata[i].title}}</td>
          <td class="text-center">{{bdata[i].date}}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center py-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">이전</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item">
            <a class="page-link" href="#">다음</a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name:'board',
  props:['bdata'],
  
}
</script>

<style>

</style>