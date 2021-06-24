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
      <tbody id="accordion">
        <tr v-for="(board,i) in bdata" :key="i" class="cursor" data-toggle="collapse" :data-target="'#board'+i">
          <th scope="row">{{bdata[i].idx + 1}}</th>
          <td>{{bdata[i].title}}</td>
          <td class="text-center">{{bdata[i].date}}</td>
          
         <!-- <td class="collapse boardContent" :id="'board'+i" data-parent="#accordion">
          <div class="boardContent" :id="'board'+i">
            {{bdata[i].content}}
          </div>
        </td> -->
        </tr>
        <tr>
            <td colspan="3">
                <div id="accordion" class="collapse">Hidden by default</div>
            </td>
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
  
  .boardContent {padding: 20px; }
</style>