import whisper
import spacy

model = whisper.load_model('tiny')
result = model.transcribe('harvard.wav', fp16 = False)

text = result['text']
words = text.split()
#print(result['text'])

nlp = spacy.load('en_core_web_sm')
type(nlp)
doc = nlp(text)

print([t.text for t in doc])