import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const InfoCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const InfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InfoCard
        title="Perdido en Mi"
        description="La canción 'Perdido En Mí' del artista C.R.O se sumerge en las profundidades de una relación compleja y posiblemente tóxica. A través de sus versos, el artista narra la historia de un encuentro con una mujer que parece tener intenciones ocultas, sugeridas por la frase 'La miro a esa chica con sed'. Esta sed puede interpretarse como un deseo intenso, no necesariamente de naturaleza física, sino posiblemente de poder o control.
        El estribillo 'Chica, que yo te puedo leer' revela que el narrador se siente confiado en su capacidad para entender y ver a través de las intenciones de la mujer, a pesar de que ella intenta esconderse 'detrás de la labia'. La repetición de 'Ya no siento lo que ella sentía' sugiere un distanciamiento emocional, una desconexión que ha crecido entre ellos, lo que lleva a la conclusión de que 'no hay nada que hacer'.
        La canción también aborda temas de desamor y desilusión. La mención de 'polvo de hadas, licor y menta helada' podría simbolizar los intentos de escapar de la realidad o de adormecer el dolor emocional. La insistencia en que 'ya no queda nada' refuerza la idea de un final inevitable para la relación. C.R.O, conocido por su estilo que mezcla trap con otros géneros urbanos, utiliza esta canción para explorar las emociones crudas y a menudo dolorosas que surgen cuando el amor se desvanece y la confianza se rompe."
        imageSrc="https://cdns-images.dzcdn.net/images/cover/28070e625ebc7c94e85095f4b22aeeb7/500x500.jpg"
      />
      <InfoCard
        title="704"
        description="La canción '704' del artista argentino C.R.O, cuyo nombre real es Franco Cragnulini, es una pieza introspectiva que explora temas de desamor, desilusión y la búsqueda de significado en medio de la adversidad. La letra refleja un diálogo interno donde el protagonista se enfrenta a la realidad de que las cosas no han salido como esperaba, a pesar de haber hecho lo que se le pidió. La repetición de 'no era como quisiste, no era como lo esperabas' subraya la sensación de fracaso y la dificultad de cumplir con las expectativas de los demás, posiblemente en una relación amorosa.
        El estribillo 'Que no lo hago por mí, que lo hago por vos' sugiere un sacrificio personal, donde el protagonista parece actuar en beneficio de otra persona, quizás su pareja. Sin embargo, hay un tono de resignación y falta de reciprocidad en la relación, lo que se refleja en la línea 'Nadie está en tu lugar, nadie tiene razón'. Esto podría interpretarse como una expresión de la complejidad de las relaciones humanas y la dificultad de encontrar un terreno común cuando las perspectivas son diferentes.
        La canción también toca la idea de la esperanza frente a la desilusión, como se ve en 'Todavía hay esperanza, ¿o sólo son ilusiones?'. El protagonista parece estar en un punto de inflexión, debatiendo entre mantener la fe en un cambio positivo o aceptar que lo que vive son meras ilusiones. La repetición de 'Sólo oír y acostumbrarme' puede indicar un proceso de adaptación a la realidad, aunque esta no sea la deseada. C.R.O, conocido por su estilo que mezcla trap, rap y otros géneros urbanos, utiliza estas letras para transmitir emociones crudas y una narrativa que muchos pueden encontrar relatable."
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-AwIsxcTQsSR68Yr6sjHojC9KraDnVqyfg&s"
      />
      <InfoCard
        title="Mi alma"
        description="La canción 'Grave' de C.R.O es una profunda exploración de la desesperación y el dolor emocional. Desde el inicio, el artista nos sumerge en un estado de angustia con la frase 'mi alma sigue grave', sugiriendo una condición de sufrimiento persistente. La repetición de esta línea a lo largo de la canción refuerza la idea de una herida emocional que no sana, una tristeza que es evidente para todos a su alrededor. La mención de ir al bar como una forma de escape indica una búsqueda de alivio temporal en el alcohol, un intento de evadir la realidad dolorosa que enfrenta.
        El corazón 'sin llave' y las puertas que se cierran simbolizan la vulnerabilidad y el aislamiento. C.R.O se siente atrapado, sin acceso a la libertad emocional o a la conexión con los demás. La referencia a una 'oscura y sucia habitación' sugiere un lugar de sufrimiento y soledad, donde el amor o la pasión que una vez existió ahora solo trae dolor. La línea 'no funciono sin tu fuego' indica una dependencia emocional intensa, donde la ausencia de la otra persona deja al artista sintiéndose vacío e incapaz de seguir adelante.
        La canción también aborda la traición y la desilusión. Las promesas rotas y las mentiras se reflejan en la mirada de la otra persona, y aunque C.R.O intenta escapar de esta situación, se siente ignorado y solo. La repetición de 'nadie está escuchando' y 'nadie estaba ahí' enfatiza la sensación de abandono y la lucha interna del artista. En conjunto, 'Grave' es una poderosa representación de la lucha contra la desesperación, la soledad y la búsqueda de una salida en medio de la oscuridad emocional."
        imageSrc="https://i.scdn.co/image/ab67616d0000b273bef258585d0a0b1a0c318b15"
      />
      <InfoCard
        title="Keta"
        description="La canción 'Keta' del artista C.R.O se sumerge en el mundo del trap, un género musical que a menudo explora temas como el narcotráfico, la vida en las calles y el hedonismo. En este caso, la letra de 'Keta' parece hacer referencia a una vida de excesos, donde las drogas ('keta', abreviatura de ketamina, y 'polvo de hada', un posible eufemismo para alguna sustancia ilícita) juegan un papel central como mecanismo de escape de una 'vida de mierda'. El artista menciona el deseo de obtener su 'caché', es decir, su pago o recompensa, lo que podría interpretarse como una metáfora de la búsqueda de éxito y reconocimiento en el ámbito musical o en la vida en general.
        El uso de lenguaje explícito y la mención de 'tu puta mujer' reflejan una actitud desafiante y provocadora, característica del trap, que busca impactar y a menudo romper con lo políticamente correcto. C.R.O se presenta como un personaje que no solo es consciente de su atractivo y éxito ante los demás, sino que también se jacta de ello. La repetición de estas frases enfatiza la confianza en sí mismo y la indiferencia hacia las opiniones ajenas.
        Musicalmente, C.R.O se adscribe al trap, un estilo que se originó en el sur de Estados Unidos y que ha ganado popularidad en el mundo hispanohablante. El trap se caracteriza por sus ritmos pesados, uso de sintetizadores y líricas que a menudo abordan la vida en las calles, el dinero, las drogas y las relaciones amorosas de manera cruda y directa. 'Keta' es un ejemplo de cómo estos elementos se combinan para crear una canción que refleja una realidad cruda y un estilo de vida hedonista."
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-AwIsxcTQsSR68Yr6sjHojC9KraDnVqyfg&s"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default InfoScreen;
