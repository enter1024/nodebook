public class Person {
	String name;		// ��Ա����
	String gender;
	int age;
	
	public Person(String name){
		//���������ع�
		System.out.println("�����޲εĹ��캯��");
	}
	
	public Person(String name, int age, String gender) {
		// ����Ա������ֵ
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	
	public void showName() {
		System.out.println("�ҵ����ֽ�" + this.name);
	}
	
	public static void main(String[] args) {
		// java�е���ں���
		Person p = new Person("David", 18, "��");
		System.out.println(p);			// Person@15db9742(p���ڴ�����һ����ַ)
		System.out.println(p.name);		// David
		System.out.println(p.age);		// 18
		System.out.println(p.gender);	// ��
		p.showName();					// �ҵ����ֽ�David
	}
}