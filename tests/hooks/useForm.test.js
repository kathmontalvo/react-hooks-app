import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm'


describe('Pruebas en useForm', () => { 

  const initialForm = {
    name: 'kath',
    mail: 'katho07@gmail.com'
  }

  test('debe regresar los valores por defecto', () => { 

    const { result } = renderHook( () => useForm(initialForm));

    expect( result.current ).toEqual({
      name: initialForm.name,
      mail: initialForm.mail,
      formState: initialForm,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function ),
    })
    
  })

  test('debe de cambiar el nombre del formulario', () => { 

    const newVal = 'fer'
    const { result } = renderHook( () => useForm(initialForm));

    const { onInputChange } = result.current;

    act( () => {
      onInputChange( {target : {
        name: 'name',
        value: newVal
      }})
    })

    expect( result.current.name ).toBe(newVal);
    expect( result.current.formState.name ).toBe(newVal);

  })

  test('debe de realizar el reset del formulario', () => { 

    const newVal = 'fer'
    const { result } = renderHook( () => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    act( () => {
      onInputChange( {target : {
        name: 'name',
        value: newVal
      }})
      onResetForm();
    })

    expect( result.current.name ).toBe(initialForm.name);
    expect( result.current.formState.name ).toBe(initialForm.name);
  })
})