<template>
    <main>
        
    </main>
</template>

<script>
    var icons = [
      'address-book',
      'address-card',
      'adjust',
      'air-freshener',
      'align-center',
      'align-justify',
      'align-left',
      'align-right',
      'allergies',
      'ambulance',
      'american-sign-language-interpreting',
      'anchor',
    ]
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding: 16px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.icon-item svg {
  font-size: 24px;
  margin-bottom: 8px;
}
</style>