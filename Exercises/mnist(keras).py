# -*- coding: utf-8 -*-
"""MNIST(KERAS).ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1YZv7jQXrFKmoQpiuLEfYZWXpmfUuL9RB
"""

# Keras에서 mnist 데이터셋 적재하기 

from keras.datasets import mnist 
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()    

print(train_images.shape) # 60000, 28, 28
len(train_labels) #60000

# 신경망 구조 
from keras import models 
from keras import layers 

#
network = models.Sequential()
network.add(layers.Dense(512, activation='relu', input_shape=(28 * 28,))) #은닉층 relu함수
network.add(layers.Dense(10, activation='softmax')) #마지막층 softmax 함수 사용

# 컴파일 단계 
#손실함수, 옵티마이저, 훈련과 테스트 과정을 모니터링할 지표 설정 

network.compile(optimizer='rmsprop',
                loss = 'categorical_crossentropy',
                metircs = ['accuracy'])

# 이미지 데이터 준비
#데이터를 네트워크에 맞는 크기로 바꾸고 모든 값을 0~1사이로 스케일 조정
train_images = train_images.reshape((60000, 28*28))
train_images = train_images.astype('float32') /255

test_images = test_images.reshape((10000, 28*28))
test_images = test_images.astype('float32') /255

# 레이블 준비
# 레이블을 범주형으로 인코딩
from keras.utils import to_categorical
train_labels = to_categorical(train_labels)
test_labels = to_categorical(test_labels)

# 학습 시작
# 훈련데이터 정보 표시 
network.fit(train_images, train_labels, epochs=5, batch_size=128)

# 학습 결과 
# 테스트 세트 결과 표시 
test_loss, test_acc = network.evaluate(test_images, test_labels)
print('test_loss:', test_loss)
print('test_acc:', test_acc)