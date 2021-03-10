<template
        v-if="i === 0 && text.slice(0, currGroup.start - 1).length"
>{{text.slice(0, currGroup.start - 1)}}xxx</template>



<!--标注的内容-->
<anno-group
        :segmentId="id"
        :key="'group-' + i"
        class="anno-group"
        :group="currGroup"
        :groupIndex="i"
        :value="groupMap[i]"
        :content="text.slice(currGroup.start - 1, currGroup.end)"
        :enableEdit="enableEdit"
        :errorPos="validErrorPos"
/>


<template
        v-if="text.slice(currGroup.end,groups[i + 1]? groups[i + 1].start - 1: undefined).length"
>{{text.slice(currGroup.end,groups[i + 1]? groups[i + 1].start - 1: undefined)}}xxx2</template>
</template>




anno-group



label
v-for="(item,i) in groupData"
